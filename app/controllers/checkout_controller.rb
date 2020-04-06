class CheckoutController < ApplicationController
  before_action :authenticate_user!, only:[:address, :payment]

  def cart
    @cart = @current_cart 
  end

  def address
    @cart = @current_cart 
    @address = Address.new
    @user_address = Address.where(:user_id => current_user, :status => 'active')
  end

  def payment
    @cart = @current_cart
    @select_address = Address.find(params[:address_id])
    @order = Order.new
  end
end
