# typed: true
# frozen_string_literal: true

module Mutations
  class UpdateBook < BaseMutation
    # == Payload
    class Payload < T::Struct
      const :book, T.nilable(Book)
      const :errors, T.nilable(InputFieldErrors)
    end

    # == Fields
    field :book, Types::BookType
    field :errors, [Types::InputFieldErrorType]

    # == Arguments
    argument :author_name, String
    argument :book_id, ID, loads: Types::BookType
    argument :title, String

    # == Resolver
    sig do
      override
        .params(book: Book, attributes: T.untyped)
        .returns(Payload)
    end
    def resolve(book:, **attributes)
      authorize!(book, to: :update?)
      book.attributes = attributes
      if book.save
        Payload.new(book:)
      else
        Payload.new(errors: book.input_field_errors)
      end
    end
  end
end
