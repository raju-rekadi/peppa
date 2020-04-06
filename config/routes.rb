Rails.application.routes.draw do
  
  devise_for :admin, :controllers =>{
    :sessions => 'admin/sessions'
  }

  # mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  root "home#index"

  devise_for :users, :controllers =>{
    :registrations => 'users/registrations',
    :sessions => 'users/sessions',
    :passwords => 'passwords',
    :confirmations => 'users/confirmations',
    :unlocks => 'users/unlocks',
    :omniauth_callbacks => 'users/omniauth_callbacks'
  }

  
  # Admin panel custom
  resources :admin ,:only => [:index]
  get 'admin/dashboard' => 'admin#dashboard'

  #Admin panel Dishes enter through restaurants
  namespace :admin do
    resources :restaurants do
      resources :dishes do
        resources :ratings
      end
    end
    resources :locations

    resources :orders
    resources :users
  end


  resources :home
  resources :restaurants
  resources :dishes
  resources :pictures
  resources :contacts
  resources :ratings
  resources :carts
  resources :wishlists
  resources :users
  resources :orders
  resources :addresses

  post 'addresses/:id/deactivate' => 'addresses#deactivate', as: 'deactivate_address'

  # search method from homepage
  get '/search' => 'home#search', :as => 'search_page'

  # user ratings
  resources :dishes do
    resources :ratings
  end
  
  # user wishlists
  resources :dishes do
    resources :wishlists
    post 'wishlists/:id/add_to_cart' => 'wishlists#add_to_cart', as: 'add_cart'
  end

  # line items to cart
  post 'line_items/:id/add' => "line_items#add_quantity", as: "line_item_add"
  post 'line_items/:id/reduce' => "line_items#reduce_quantity", as: "line_item_reduce"
  post 'line_items' => "line_items#create"
  get 'line_items/:id' => "line_items#show", as: "line_item"
  delete 'line_items/:id' => "line_items#destroy"

  get 'orders/:id/success' => "orders#success", as: 'order_success'
  
  
  get 'checkout/cart' => 'checkout#cart'
  get 'checkout/address' => 'checkout#address'
  get 'checkout/payment' => 'checkout#payment'




end
