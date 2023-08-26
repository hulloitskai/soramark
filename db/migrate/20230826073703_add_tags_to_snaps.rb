# typed: true
# frozen_string_literal: true

class AddTagsToSnaps < ActiveRecord::Migration[7.0]
  def change
    add_column :snaps, :tags, :string, array: true, index: true
    add_column :snaps, :analyzed_at, :timestamptz
  end
end
