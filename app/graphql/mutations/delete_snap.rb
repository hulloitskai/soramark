# typed: true
# frozen_string_literal: true

module Mutations
  class DeleteSnap < BaseMutation
    # == Payload
    class Payload < T::Struct
      const :book, Book
    end

    # == Fields
    field :book, Types::BookType
    field :errors, [Types::InputFieldErrorType]

    # == Arguments
    argument :snap_id, ID, required: true, loads: Types::SnapType

    # == Resolver
    sig { override.params(snap: Snap).returns(Payload) }
    def resolve(snap:)
      authorize!(snap, to: :delete?)
      book = snap.book!
      snap.destroy!
      Payload.new(book:)
    end
  end
end
