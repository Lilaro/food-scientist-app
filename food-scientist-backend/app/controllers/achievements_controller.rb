class AchievementsController < ApplicationController

    def index 
        achievements = Achievement.all
        render json: AchievementSerializer.new(achievements)
    end

    def show
        achievement = Achievement.find(params[:id])
        options = {
    include: [:topic, :user]
  }
        render json: AchievementSerializer.new(achievement)
    end

    def create 
        achievement = Achievement.create(achievement_params)
        render json: AchievementSerializer.new(achievement)
    end

    private
    def achievement_params
        params.permit(:topic_id, :user_id)
    end

end
