# typed: true
# frozen_string_literal: true

module Types
  class SnapType < BaseObject
    # == Interfaces
    implements NodeType

    # == Fields
    field :book, BookType, null: false
    field :photo, ImageType, null: false, method: :photo_blob
    field :text, String

    # == Helpers
    sig { override.returns(Snap) }
    def object = super
  end
end
