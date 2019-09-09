class AchievementSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  belongs_to :topic
  belongs_to :user
end
