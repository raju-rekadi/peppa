class ChangePriceType < ActiveRecord::Migration[5.2]
  def change

  	remove_column :dishes, :price
  	add_column :dishes, :price, :bigint

  end
end
