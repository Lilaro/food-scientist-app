class User < ApplicationRecord
    has_many :topics, through: :achievements
end
