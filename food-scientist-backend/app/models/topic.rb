class Topic < ApplicationRecord
    has_many :achievements
    has_many :users, through: :achievements
end
