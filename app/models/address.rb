class Address < ApplicationRecord
	belongs_to :user
	has_many :orders

	validates_presence_of  :full_name,message:"can't be empty"
  validates_length_of :full_name, minimum: 3, maximum: 30

  validates_presence_of  :mobile, message:"can't be empty", :presence => true
  validates_format_of :mobile, :with => /[0-9]/
  validates_length_of :mobile, minimum: 10, maximum: 10

  validates_presence_of  :pincode, message:"can't be empty", :presence => true
  validates_format_of :pincode, :with => /[0-9]/
  validates_length_of :pincode, minimum: 6, maximum: 6

  validates_presence_of  :house_no,message:"can't be empty"
  validates_length_of :house_no, maximum: 15

  validates_presence_of  :street,message:"can't be empty"
  validates_length_of :street,  maximum: 45

  validates_presence_of  :landmark,message:"can't be empty"
  validates_length_of :landmark, maximum: 45

  validates_presence_of  :city,message:"can't be empty"
  validates_presence_of  :state,message:"can't be empty"
end
