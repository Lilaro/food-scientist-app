class Topic < ApplicationRecord
    has_many :users, through: :achievements
end
