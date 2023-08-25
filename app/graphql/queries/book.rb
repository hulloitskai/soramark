# typed: true
# frozen_string_literal: true

module Queries
  class Book < BaseQuery
    include AllowsFailedLoads

    # == Type
    type Types::BookType, null: true

    # == Arguments
    argument :id, ID, loads: Types::BookType, as: :book

    # == Resolver
    sig do
      params(book: T.nilable(::Book))
        .returns(T.nilable(::Book))
    end
    def resolve(book:)
      if book
        book if allowed_to?(:show?, book)
      end
    end
  end
end
