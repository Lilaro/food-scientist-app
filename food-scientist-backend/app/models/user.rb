class User < ApplicationRecord
    has_many :achievements
    has_many :topics, through: :achievements
end
