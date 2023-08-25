# typed: true
# frozen_string_literal: true

class SnapPolicy < ApplicationPolicy
  # == Rules
  def index = false

  def manage?
    user = authenticate!
    snap = T.cast(record, Snap)
    snap.book!.owner! == user
  end
end
