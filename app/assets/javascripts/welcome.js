$(document).ready(function(){
  Song = Backbone.Model.extend({});

  var song = new Song();
  song.url = '/songs/1.json'

  song.fetch({
    success : function(){
      console.log(song.get('title'));
    } 
  });

  //-------------------------------------

  Songs = Backbone.Collection.extend({
    model : Song
  });
  var songs = new Songs();

  songs.url = '/songs.json'

  songs.fetch({
    success : function(){
      _.each(songs.models, function(model){
        view = new SongView({ model : model });
        $('.songs').append(view.render());
      });
      console.log(songs);
    } 
  });

  //-------------------------------------

  var SongView = Backbone.View.extend({
    tagName : 'li',
    events : {
      'click' : 'alertDescription',
    },
    alertDescription : function() {
      alert(this.model.get('description'))
    },
    render : function() {
      return $(this.el).text(this.model.get('title'));
    }
  });



});
