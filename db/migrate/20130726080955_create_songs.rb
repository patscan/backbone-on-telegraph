class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :subject
      t.string :description
      t.string :lyrics
      t.string :url

      t.timestamps
    end
  end
end
