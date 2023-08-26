# typed: true
# frozen_string_literal: true

module Queries
  class Snap < BaseQuery
    include AllowsFailedLoads

    # == Type
    type Types::SnapType, null: true

    # == Arguments
    argument :id, ID, loads: Types::SnapType, as: :snap

    # == Resolver
    sig do
      params(snap: T.nilable(::Snap))
        .returns(T.nilable(::Snap))
    end
    def resolve(snap:)
      if snap
        snap if allowed_to?(:show?, snap)
      end
    end
  end
end
