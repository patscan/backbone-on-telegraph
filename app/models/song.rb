class Song < ActiveRecord::Base
  attr_accessible :description, :lyrics, :subject, :title, :url
end
