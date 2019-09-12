class AchievementSerializer
  include FastJsonapi::ObjectSerializer
  attributes :topic_id, :user_id
  belongs_to :topic
  belongs_to :user
end
