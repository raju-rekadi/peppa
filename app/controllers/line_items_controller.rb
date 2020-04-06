class LineItemsController < ApplicationController
  # before_action :authenticate_user!
  def create
    chosen_product = Dish.find(params[:dish_id])
    current_cart = @current_cart

    # If cart already has this product then find the line_item otherwise create a new line_item
    if current_cart.dishes.include?(chosen_product)
      @line_item = current_cart.line_items.find_by(:dish_id => chosen_product)
      @line_item.quantity += 1
    else
      @line_item = LineItem.new
      @line_item.cart = current_cart
      @line_item.dish = chosen_product
    end
    # Save and redirect to cart show path
    @line_item.save
    redirect_to checkout_cart_path
  end

  def destroy
    @line_item = LineItem.find(params[:id])
    @line_item.destroy
    respond_to do |format|
        format.html{redirect_to checkout_cart_path, notice:'Item succesfully remove from cart'}
    end
  end


  def add_quantity
    @line_item = LineItem.find(params[:id])
    @line_item.quantity += 1
    @line_item.save
    redirect_to checkout_cart_path
  end

  def reduce_quantity
    @line_item = LineItem.find(params[:id])
    if @line_item.quantity > 1
      @line_item.quantity -= 1
    end
    @line_item.save
    redirect_to checkout_cart_path
  end
end