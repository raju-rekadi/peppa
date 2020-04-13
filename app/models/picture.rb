class Picture < ApplicationRecord
  belongs_to :imageable, :polymorphic => true
  validates_presence_of :image,message:"can't be empty"

  mount_uploader :image, ImageUploader # used for carrierwave gem
end
