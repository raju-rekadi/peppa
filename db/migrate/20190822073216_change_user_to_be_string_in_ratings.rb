class ChangeUserToBeStringInRatings < ActiveRecord::Migration[5.2]
  def change
  	change_column :ratings, :user_name, :string

  end
end
