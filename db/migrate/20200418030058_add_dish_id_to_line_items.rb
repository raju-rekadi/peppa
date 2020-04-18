class AddDishIdToLineItems < ActiveRecord::Migration[5.2]
  def change
  	rename_column :line_items , :product_id, :dish_id
  end
end
