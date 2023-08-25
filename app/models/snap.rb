# typed: true
# frozen_string_literal: true

# == Schema Information
#
# Table name: snaps
#
#  id           :uuid             not null, primary key
#  processed_at :datetime
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
  # == Associations
  belongs_to :book
  has_one_attached :photo

  # == Validations
  validates :photo, presence: true
end
