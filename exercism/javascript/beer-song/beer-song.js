function BeerSong() {};


//8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n


BeerSong.prototype.verse = function(input) {

  return input + " bottles of beer on the wall, " + input + " bottles of beer.\nTake one down and pass it around, " + (input-1) + " bottles of beer on the wall.\n"
}

module.exports = BeerSong;
