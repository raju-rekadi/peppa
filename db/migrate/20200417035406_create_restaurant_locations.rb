class CreateRestaurantLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurant_locations do |t|

      t.belongs_to :restaurant, type: :uuid 
      t.belongs_to :location, type: :uuid

      t.timestamps
    end
  end
end
