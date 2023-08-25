# typed: true
# frozen_string_literal: true

class BookPolicy < ApplicationPolicy
  # == Rules
  def index = false

  def manage?
    authenticate! == user
    book = T.cast(record, Book)
    book.owner == user
  end
end
