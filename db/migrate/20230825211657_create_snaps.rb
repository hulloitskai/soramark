# typed: true
# frozen_string_literal: true

class CreateSnaps < ActiveRecord::Migration[7.0]
  def change
    create_table :snaps, id: :uuid do |t|
      t.text :text
      t.timestamptz :processed_at
      t.belongs_to :book, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
