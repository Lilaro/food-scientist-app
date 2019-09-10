class UsersController < ApplicationController
    def index 
        users = User.all
        render json: UserSerializer.new(users)
    end

    def show
        user = User.find(params[:id])
        render json: UserSerializer.new(user)
    end

    def create 
        user = User.create(user_params)
        render json: UserSerializer.new(user)
    end

    private
    def user_params
        params.permit(:username, :email)
    end
end
