class CreateRestaurantDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurant_dishes do |t|
    	
      t.belongs_to :restaurant, type: :integer 
      t.belongs_to :dish, type: :integer

      t.timestamps
    end
  end
end
