class RestaurantsController < ApplicationController

  def show
    @restaurant = Restaurant.find(params[:id])
    @dishes =  @restaurant.dishes
    if params[:price]
      @dishes =  @restaurant.dishes.by_price(params[:price])
    end

    if params[:ratings]
      @dishes =  @restaurant.dishes.by_rating
      @dish_avg = @restaurant.dishes.joins(:ratings).group('dishes.id')
    end

    if params[:ratings_filter]
      @dishes =  @restaurant.dishes.sort_ratings(params[:ratings_filter])
    end

    if params[:all]
      @dishes =  @restaurant.dishes
    end

    if params[:veg]
      @dishes =  @restaurant.dishes.where("category_id":1)
    end

    if params[:nonveg]
      @dishes =  @restaurant.dishes.where("category_id":2)
    end

    if params[:drinks]
      @dishes =  @restaurant.dishes.where("category_id":3)
    end

    if params[:desserts]
      @dishes =  @restaurant.dishes.where("category_id":4)
    end
  end   
end
