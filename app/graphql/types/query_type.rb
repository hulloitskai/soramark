# typed: true
# frozen_string_literal: true

module Types
  class QueryType < BaseObject
    # Add `node` and `nodes` fields.
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # == Queries
    field :test_echo, resolver: Queries::TestEcho

    field :activity_status, resolver: Queries::ActivityStatus
    field :announcement, resolver: Queries::Announcement
    field :booted_at, resolver: Queries::BootedAt
    field :contact_email, resolver: Queries::ContactEmail
    field :image_by_signed_id, resolver: Queries::ImageBySignedId
    field :password_strength, resolver: Queries::PasswordStrength

    field :book, resolver: Queries::Book
    field :snap, resolver: Queries::Snap
    field :user, resolver: Queries::User
    field :viewer, resolver: Queries::Viewer
  end
end
