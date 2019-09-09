class TopicSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :photo, :lesson
end
