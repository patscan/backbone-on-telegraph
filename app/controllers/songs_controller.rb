class SongsController < ApplicationController
  respond_to :json

  def index
    @songs = Song.all
    respond_with @songs
  end

  def show
    @song = Song.find(params[:id])
    respond_with @song
  end
end
