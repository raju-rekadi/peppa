class AddPaymentIdToOrders < ActiveRecord::Migration[5.2]
  def change
  	add_column :orders, :payment_id, :string
  	add_column :orders, :transaction_id, :string
  end
end
