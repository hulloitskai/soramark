# typed: true
# frozen_string_literal: true

module Types
  class BookType < BaseObject
    # == Interfaces
    implements NodeType

    # == Fields
    field :author_name, String, null: false
    field :title, String, null: false

    # == Helpers
    sig { override.returns(Book) }
    def object = super
  end
end
