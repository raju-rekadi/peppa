class AddCustomerIdToOrders < ActiveRecord::Migration[5.2]
  def change
  	add_column :orders, :stripe_customer_id, :string
    add_column :orders, :payment, :string
    add_column :orders, :payment_type, :string
    add_column :orders, :invoice_id, :string

  end
end
