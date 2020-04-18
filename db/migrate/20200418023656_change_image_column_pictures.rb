class ChangeImageColumnPictures < ActiveRecord::Migration[5.2]
  def change
  	rename_column :pictures, :imageable_id, :imageble_id
    rename_column :pictures, :imageable_type, :imageble_type
  	
  end
end
