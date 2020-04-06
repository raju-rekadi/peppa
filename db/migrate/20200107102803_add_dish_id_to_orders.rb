class AddDishIdToOrders < ActiveRecord::Migration[5.2]
  def change
    rename_column :orders, :cart_id, :dish_id
    rename_column :orders, :payment_id, :amount
  end
end
