# typed: true
# frozen_string_literal: true

class BooksController < ApplicationController
  # == Filters
  before_action :authenticate_user!
  before_action :set_book

  # == Actions
  def show
    book = T.must(@book)
    authorize!(book)
    book_id = book.to_gid.to_s
    data = query!("BookPageQuery", book_id:)
    render(inertia: "BookPage", props: { data: })
  end

  private

  # == Filter Handlers
  sig { void }
  def set_book
    @book = T.let(@book, T.nilable(Book))
    @book = Book.friendly.find(params[:id])
  end
end
