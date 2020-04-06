class AdminController < ApplicationController
  before_action :authenticate_admin!
  
  def index   
  
  end

  def dashboard
  	@orders = Order.all
  	@users = User.last(5)
  end
end
