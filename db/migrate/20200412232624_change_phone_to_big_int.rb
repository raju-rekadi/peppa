class ChangePhoneToBigInt < ActiveRecord::Migration[5.2]
  def change
  	change_column :restaurants, :phone, :bigint
  end
end
