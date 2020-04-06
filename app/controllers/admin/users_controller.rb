class Admin::UsersController < ApplicationController
  before_action :authenticate_admin!
	def index
    @users = User.all.order(created_at: :desc).paginate(page:  params[:page], per_page: 5)
      respond_to do |format|
        format.html
        format.js
      end
  end

  def show
    @user = User.find(params[:id])
  end

   def edit 
    @user = User.find(params[:id]) 
    
  end 
   
  def update   
    @user = User.find(params[:id])   
    if @user.update_attributes(user_params)   
      redirect_to admin_user_path(@user) 
    else     
      render :edit   
    end   
  end  

  def destroy   
   @user = User.find(params[:id]) 
    @user.destroy
    respond_to do |format|
      format.html { redirect_to request.referrer, notice: 'user succesfully deleted' }
    end    
  end   
   
  private
  def user_params   
    params.require(:user).permit(:name)   
  end   
end
