class Cart < ActiveRecord::Base
  # Has many through association b/w cart,line_item,dish
  has_many :line_items, dependent: :destroy
  has_many :dishes, through: :line_items

  def sub_total
    sum = 0
    self.line_items.each do |line_item|
      sum+= line_item.total_price
    end
    return sum
  end
end