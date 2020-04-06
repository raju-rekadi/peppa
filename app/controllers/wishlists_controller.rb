class WishlistsController < ApplicationController
  before_action :find_dish, only: [:destroy,:create]
  before_action :find_wishlist, only: [:destroy, :add_to_cart]
  before_action :authenticate_user!, only:[:create]
  
  def index
    @wishlists = Wishlist.where(:user_id => current_user)
  end

  def create
    if already_wishlisted?
      flash[:notice] = "You can't wishlist more than once"
    else
      @dish.wishlists.create(user_id: current_user.id)
    end

    respond_to do |format|
      format.html {redirect_to request.referrer}
      format.js {}
    end
  end

  def already_wishlisted?
    Wishlist.where(user_id: current_user.id, dish_id:
    params[:dish_id]).exists?
  end

  def add_to_cart
    chosen_product = Dish.find(params[:dish_id])
    current_cart = @current_cart

    # If cart already has this dish then find the line_item otherwise create a new line_item for this dish
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
    @wishlist.destroy
    redirect_to checkout_cart_path  
  end

  def destroy
    if !(already_wishlisted?)
      flash[:notice] = "Cannot unwishlist"
    else
      @wishlist.destroy
    end

    respond_to do |format|
      format.html { redirect_to request.referrer }
      format.js {}
    end
  end

  def find_wishlist
    @dish = Dish.find(params[:dish_id])
    @wishlist = @dish.wishlists.find(params[:id])
  end

  private
  def find_dish
    @dish = Dish.find(params[:dish_id])
  end
end
