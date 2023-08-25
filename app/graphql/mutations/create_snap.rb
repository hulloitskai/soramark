# typed: true
# frozen_string_literal: true

module Mutations
  class CreateSnap < BaseMutation
    # == Payload
    class Payload < T::Struct
      const :snap, T.nilable(Snap)
      const :errors, T.nilable(InputFieldErrors)
    end

    # == Fields
    field :errors, [Types::InputFieldErrorType]
    field :snap, Types::SnapType

    # == Arguments
    argument :book_id, ID, required: true, loads: Types::BookType
    argument :photo, Types::ImageInputType

    # == Resolver
    sig { override.params(book: Book, attributes: T.untyped).returns(Payload) }
    def resolve(book:, **attributes)
      authorize!(book, to: :manage?)
      snap = book.snaps.build(**attributes)
      if snap.save
        Payload.new(snap:)
      else
        Payload.new(errors: snap.input_field_errors)
      end
    end
  end
end
