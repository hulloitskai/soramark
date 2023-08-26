# typed: true
# frozen_string_literal: true

# == Schema Information
#
# Table name: snaps
#
#  id           :uuid             not null, primary key
#  analyzed_at  :datetime
#  processed_at :datetime
#  tags         :string           is an Array
#  text         :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  book_id      :uuid             not null
#
# Indexes
#
#  index_snaps_on_book_id  (book_id)
#
# Foreign Keys
#
#  fk_rails_...  (book_id => books.id)
#
class Snap < ApplicationRecord
  include Identifiable

  # == Attributes
  sig { returns(T::Boolean) }
  def processed? = processed_at?

  sig { returns(T::Boolean) }
  def analyzed? = analyzed_at?

  sig { returns(T::Array[String]) }
  def other_book_tags
    book_tags = book!.tags
    if (tags = self.tags)
      book_tags - tags
    else
      book_tags
    end
  end

  # == Associations
  belongs_to :book

  sig { returns(Book) }
  def book!
    book or raise ActiveRecord::RecordNotFound, "Missing book"
  end

  # == Attachments
  has_one_attached :photo

  sig { returns(T::Boolean) }
  def photo?
    photo.attached?
  end

  sig { returns(T::Boolean) }
  def photo_previously_changed?
    attachment_changes.include?("photo")
  end

  # == Validations
  validates :photo, presence: true
  validates :text, presence: true, allow_blank: true, if: :processed?
  validates :tags, presence: true, allow_blank: true, if: :analyzed?

  # == Callbacks
  after_commit :process_later,
               on: %i[create update],
               if: %i[photo_previously_changed? photo?]
  after_commit :analyze_later,
               on: %i[create update],
               if: %i[text_previously_changed? text?]

  # == Text Detection
  sig { returns(ActiveStorage::VariantWithRecord) }
  def photo_variant_for_text_detection
    if (blob = photo_blob)
      blob.variant(resize_to_limit: [2400, 2400])
    end
  end

  sig { returns(T.nilable(String)) }
  def detect_text
    if (variant = photo_variant_for_text_detection)
      variant.process
      response = Textract.detect_document_text(variant.download)
      lines = response.blocks.filter { |block| block.block_type == "LINE" }
      self.text = lines.pluck(:text).join("\n")
    end
  end

  # == Processing
  sig { void }
  def self.process
    where(processed_at: nil).find_each(&:process_later)
  end

  sig { void }
  def self.process_later
    ProcessSnapsJob.perform_later
  end

  sig { returns(TrueClass) }
  def process!
    detect_text
    update!(processed_at: Time.current)
  end

  sig { void }
  def process_later
    ProcessSnapJob.perform_later(self)
  end

  # == Analysis
  sig { void }
  def self.analyze
    where(analyzed_at: nil).where.not(text: nil)
      .find_each(&:analyze_later)
  end

  sig { void }
  def self.analyze_later
    AnalyzeSnapsJob.perform_later
  end

  sig { returns(T::Boolean) }
  def analyze!
    if text?
      messages = [{ role: "user", content: analyze_user_message }]
      completion = Gpt.complete_chat(messages)
      self.tags = completion.split("\n").map do |tag|
        tag.strip.delete_prefix("- ")
      end
      update!(analyzed_at: Time.current)
    else
      false
    end
  end

  sig { void }
  def analyze_later
    AnalyzeSnapJob.perform_later(self)
  end

  private

  # == Analysis: Helpers
  sig { returns(String) }
  def analyze_user_message
    ActionController::Base.render(
      template: "snaps/analyze_user_message",
      assigns: { snap: self },
    )
  end
end
