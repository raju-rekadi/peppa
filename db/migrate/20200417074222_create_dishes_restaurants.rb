class CreateDishesRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes_restaurants do |t|
    	t.belongs_to :restaurant, type: :integer 
        t.belongs_to :dish, type: :integer

      t.timestamps
    end
  end
end
