# typed: true
# frozen_string_literal: true

module Types
  class SnapType < BaseObject
    # == Interfaces
    implements NodeType

    # == Fields
    field :book, BookType, null: false
    field :photo, ImageType, null: false, method: :photo_blob
    field :tags, [String]
    field :text, String
    field :was_processed, Boolean, null: false, method: :processed?

    # == Helpers
    sig { override.returns(Snap) }
    def object = super
  end
end
