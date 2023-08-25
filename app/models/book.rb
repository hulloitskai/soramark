# typed: true
# frozen_string_literal: true

# == Schema Information
#
# Table name: books
#
#  id          :uuid             not null, primary key
#  author_name :string           not null
#  handle      :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  owner_id    :uuid             not null
#
# Indexes
#
#  index_books_on_handle    (handle) UNIQUE
#  index_books_on_owner_id  (owner_id)
#  index_books_uniqueness   (title,author_name) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (owner_id => users.id)
#
class Book < ApplicationRecord
  include Identifiable
  include Handled
  include FriendlyIdentifiable

  # == FriendlyIdentifiable
  friendly_id :title

  # == Associations
  belongs_to :owner, class_name: "User"
  has_many :snaps, dependent: :destroy

  # == Validations
  validates :title, :author_name, presence: true
end
