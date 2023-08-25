# typed: true
# frozen_string_literal: true

module Types
  class BookType < BaseObject
    # == Interfaces
    implements NodeType

    # == Fields
    field :author_name, String, null: false
    field :snaps, [SnapType], null: false
    field :title, String, null: false
    field :url, String, null: false

    # == Resolvers
    sig { returns(String) }
    def url
      book_url(object)
    end

    # == Helpers
    sig { override.returns(Book) }
    def object = super
  end
end
