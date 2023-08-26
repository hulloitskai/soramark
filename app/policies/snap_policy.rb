# typed: true
# frozen_string_literal: true

class SnapPolicy < ApplicationPolicy
  # == Aliases
  alias_rule :show?, to: :manage?

  # == Rules
  def index = false

  def manage?
    user = authenticate!
    snap = T.cast(record, Snap)
    snap.book!.owner! == user
  end
end
