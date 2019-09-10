class TopicSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :photo, :lesson

  has_many :achievements
end
