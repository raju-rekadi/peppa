class Admin::OrdersController < ApplicationController
  before_action :authenticate_admin!
	def index
    @orders = Order.all.order(created_at: :asc).paginate(page:  params[:page], per_page: 5)
      respond_to do |format|
        format.html
        format.js
      end
  end

  def show
    @order = Order.find(params[:id])
  end

   def edit 
    @order = Order.find(params[:id]) 
    
  end 
   
  def update   
    @order = Order.find(params[:id])   
    if @order.update_attributes(order_params)   
      redirect_to admin_order_path(@order) 
    else     
      render :edit   
    end   
  end  

  def destroy   
   @order = Order.find(params[:id]) 
    @order.destroy
    respond_to do |format|
      format.html { redirect_to request.referrer, notice: 'order succesfully deleted' }
    end    
  end   
   
  private
  def order_params
    params.require(:order).permit(:user_id, :amount, :payment_id, :transaction_id, :stripe_customer_id, :payment_type, :payment,:order_status)
  end  
end
