class AddunitpricetoLineitems < ActiveRecord::Migration[5.2]
  
  	 def change
        add_column :line_items, :unit_price, :integer
    end

end
