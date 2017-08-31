
var recordConstruct = function(artist, title, genre, price){
  var artist = artist;
  var title = title;
  var genre = genre;
  var price = price;

  return {
      getArtist: function(){return artist;},

      getTitle: function(){return title;},

      getGenre: function(){return genre;},

      getPrice: function(){return price;},

      getProperties: function(){
        var string = "";
        string += artist + "; ";
        string += title + "; ";
        string += genre + "; ";
        string += price;
        return string;
      }
  }
}

module.exports = recordConstruct