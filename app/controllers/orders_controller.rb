class OrdersController < ApplicationController
  before_action :authenticate_user!
  def index
    @orders = Order.where(:user_id => current_user)
  end

  def new
    @cart = @current_cart
    @select_address = Address.find(params[:address_id])
    @order = Order.new
  end

  def create
    @cart = @current_cart 
    @order = Order.new

    # Stripe Api customer create
    customer = Stripe::Customer.create({
      email: params[:stripeEmail],
      source: params[:stripeToken],
      name: current_user.name
    })
    
    # Stripe Api payment create
    charge = Stripe::Charge.create({
      customer: customer.id,
      amount: (@current_cart.sub_total * 100).floor,
      description: "Dishes",
      currency: 'INR',
    })

    #If Payment success create Order
    if charge["paid"] == true
      @order = Order.new(
        user_id: current_user.id,
        amount: @current_cart.sub_total,
        address_id:current_user.addresses.last.id,
        payment_id: charge.id,
        transaction_id: charge.balance_transaction,
        stripe_customer_id: customer.id,
        payment_type: 'Stripe',
        payment: 'Success',
        order_status: 'Processed'      
      )

        @current_cart.line_items.each do |item|
            @order.line_items << item
            item.cart_id = nil
        end
        @order.save    
        Cart.destroy(session[:cart_id])
        redirect_to order_success_path(@order.id)
    end

    rescue Stripe::CardError => e
      flash[:error] = e.message
      redirect_to :root
    end

    def success
      @payment = Order.last
    end

    def show
      @order = Order.find(params[:id])
    end

    def order_params
      params.require(:order).permit(:user_id, :amount, :payment_id, :transaction_id, :stripe_customer_id, :payment_type, :payment)
    end
end
