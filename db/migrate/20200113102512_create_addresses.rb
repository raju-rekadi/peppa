class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
    	t.string :full_name
    	t.string :mobile
    	t.string :pincode
    	t.string :house_no
    	t.string :street
    	t.string :landmark
    	t.string :city
    	t.string :state	

    	t.integer :user_id

      t.timestamps
    end
  end
end
