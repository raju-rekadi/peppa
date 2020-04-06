class RemovePriceToLineItem < ActiveRecord::Migration[5.2]
  def change
  	remove_column :line_items, :unit_price
  end
end
