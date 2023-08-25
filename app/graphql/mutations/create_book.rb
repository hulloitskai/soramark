# typed: true
# frozen_string_literal: true

module Mutations
  class CreateBook < BaseMutation
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
    argument :title, String

    # == Resolver
    sig { override.params(attributes: T.untyped).returns(Payload) }
    def resolve(**attributes)
      user = current_user!
      authorize!(user, to: :manage?)
      book = user.books.build(**attributes)
      if book.save
        Payload.new(book:)
      else
        Payload.new(errors: book.input_field_errors)
      end
    end
  end
end
