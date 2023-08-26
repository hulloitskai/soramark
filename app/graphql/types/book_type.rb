# typed: true
# frozen_string_literal: true

module Types
  class BookType < BaseObject
    # == Interfaces
    implements NodeType

    # == Fields
    field :author_name, String, null: false
    field :snaps, [SnapType], null: false do
      argument :tags, [String], required: false
    end
    field :tags, [String], null: false
    field :title, String, null: false
    field :url, String, null: false

    # == Resolvers
    sig do
      params(tags: T.nilable(T::Array[String])).returns(T::Enumerable[Snap])
    end
    def snaps(tags: nil)
      snaps = object.snaps
      snaps = snaps.where.contains(tags:) if tags.present?
      snaps.chronological
    end

    sig { returns(String) }
    def url
      book_url(object)
    end

    # == Helpers
    sig { override.returns(Book) }
    def object = super
  end
end
