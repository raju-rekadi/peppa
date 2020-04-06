class Order < ApplicationRecord
  has_many :line_items, dependent: :destroy
  belongs_to :user
  belongs_to :address 
end
