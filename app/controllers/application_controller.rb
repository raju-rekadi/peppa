class ApplicationController < ActionController::Base
  respond_to :html, :json
  # def after_sign_out_path_for(resource_or_scope)
 #    new_admin_session_path
 #  end

 #  def after_sign_in_path_for(resource_or_scope)
 #    admin_restaurants_path
 #  end
 # before_action :store_current_location, :unless => :devise_controller?
 #  def store_current_location
 #    store_location_for(:user, request.url)
 #  end
  before_action :store_user_location!, if: :storable_location?
 
  private
  def storable_location?
    request.get? && is_navigational_format? && !devise_controller? && !request.xhr? 
  end

  def store_user_location!
    # :user is the scope we are authenticating
    store_location_for(:user, request.fullpath)
  end
 

  def after_sign_out_path_for(resource_or_scope)
    if resource_or_scope == :user
      new_user_session_path
    elsif resource_or_scope == :admin
      new_admin_session_path
    else
      root_path
    end
  end

  def after_sign_in_path_for(admin)
      admin_index_path
  end

  def after_sign_in_path_for(resource_or_scope)
    stored_location_for(resource_or_scope) || super
  end

   def after_sign_up_path_for(resource_or_scope)
    stored_location_for(resource_or_scope) || super
  end


  protect_from_forgery with: :exception   
  before_action :current_cart  
  helper_method :current_user  
  
  before_action :configure_permitted_parameters, if: :devise_controller?


  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  private
  def current_cart
    if session[:cart_id]
      cart = Cart.find_by(:id => session[:cart_id])
      if cart.present?
        @current_cart = cart
      else
        session[:cart_id] = nil
      end
    end

    if session[:cart_id] == nil
      @current_cart = Cart.create
      session[:cart_id] = @current_cart.id
    end
  end

 
end
