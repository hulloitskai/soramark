# typed: true
# frozen_string_literal: true

module Types
  class MutationType < BaseObject
    # == Mutations
    field :test_mutation, mutation: Mutations::TestMutation

    # field :request_user_email_verification,
    #       mutation: Mutations::RequestUserEmailVerification
    # field :request_user_password_reset,
    #       mutation: Mutations::RequestUserPasswordReset
    # field :update_user_email, mutation: Mutations::UpdateUserEmail
    field :update_user, mutation: Mutations::UpdateUser

    field :create_book, mutation: Mutations::CreateBook
    field :update_book, mutation: Mutations::UpdateBook

    field :create_snap, mutation: Mutations::CreateSnap
    field :delete_snap, mutation: Mutations::DeleteSnap
  end
end
