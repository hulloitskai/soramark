# typed: true
# frozen_string_literal: true

class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books, id: :uuid do |t|
      t.belongs_to :owner,
                   null: false,
                   foreign_key: { to_table: "users" },
                   type: :uuid
      t.string :title, null: false
      t.string :author_name, null: false
      t.string :handle, null: false, index: { unique: true }
      t.index %i[title author_name],
              unique: true,
              name: "index_books_uniqueness"

      t.timestamps
    end
  end
end
