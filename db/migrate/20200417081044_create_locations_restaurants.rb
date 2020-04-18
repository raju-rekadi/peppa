class CreateLocationsRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :locations_restaurants do |t|
    	t.belongs_to :restaurant, type: :integer
    	t.belongs_to :location, type: :integer

      t.timestamps
    end
  end
end
