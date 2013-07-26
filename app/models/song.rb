class Song < ActiveRecord::Base
  attr_accessible :description, :lyrics, :subject, :title, :url
  validates_uniqueness_of :description, :lyrics, :subject, :title, :url
end
