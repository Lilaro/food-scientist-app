class CreateAchievements < ActiveRecord::Migration[5.2]
  def change
    create_table :achievements do |t|
      t.belongs_to :topic, foreign_key: true
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
