class CreateAwards < ActiveRecord::Migration
  def change
    create_table :awards do |t|
      t.string :name
      t.integer :quantity
      t.datetime :expire_at
      t.integer :odds

      t.timestamps null: false
    end
  end
end
