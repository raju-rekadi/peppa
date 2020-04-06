class AddAddressActiveDeactive < ActiveRecord::Migration[5.2]
  def change
  	add_column :addresses, :status, :string
  end
end
