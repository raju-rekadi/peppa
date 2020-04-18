class Restaurant < ApplicationRecord
    has_and_belongs_to_many :locations, :dependent => :destroy
    accepts_nested_attributes_for :locations

    has_and_belongs_to_many :dishes, :dependent => :destroy
    
    # polymorphic association for pictures
    has_many :pictures, :as => :imageble, :dependent => :destroy
    validates_associated :pictures
    accepts_nested_attributes_for :pictures


    validates_associated :locations


    validates_presence_of :name,message:"can't be empty"
    validates_presence_of :phone, message:"can't be empty", :presence => true,:numericality => true
    validates :email, presence:true, format: { with: /(\A([a-z]*\s*)*\<*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\>*\Z)/i } 
end
