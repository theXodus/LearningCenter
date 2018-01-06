
// object with all the tiles and sounds
var tiles =
    {1: { color: "green", sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3') },
     2: { color: "red", sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3') },
     3: { color: "yellow", sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3') },
     4: { color: "blue", sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')}};

// keep track of the turns
var turns = 0;
// array of choices
var computerChoices = [1,2,3,4,1]
var playerChoices = []
var gameOn
var computerMove = true;
var strictMode = false;
var replay

function getNum(){
  return Math.floor((Math.random() * 4) + 1)
}
$(document).ready(function(){
  $('#play').click(function(){
    $('#header').text("")
    gameOn = true;
    reset()
    computerMove = false;
    computerTurn();
  });

  $('#strict').click(function(){
    strictMode = !strictMode
    reset()
    $('#strictText').text("strictMode = " + strictMode)
  });
})

function computerTurn() {
  if (turns > 5) {
    gameOn = false;
    $('#header').text("WINNER!")
    reset()
  }

  var choice = getNum();
  if (!replay) {
    turns = computerChoices.length + 1
    updateTurn(turns)
    computerChoices.push(choice)
  }
  var i = 0;
  function tileArr() {
    animateTile(computerChoices[i])
    i++
    if ( i <= computerChoices.length ) {
      setTimeout( tileArr, 1000)
      computerMove = true
      if (turns === i) {
        computerMove = false;
        playerTurn()
      }
    }
  }
  tileArr()
}

function playerTurn() {
  replay = false
  playerChoices = [];
  var stillTurn = true;
  // computerMove = false;
  $("div").click(function(e){

    if (playerChoices.length > computerChoices.length || computerMove) {
      return false;
    }

    if (stillTurn) {
      turns -= 1;
      var playerTile = e.target.id
      // animateTile(playerTile)
      playerChoices.push(playerTile)
      animateTile(playerTile)
    }

    realTimeCheck(playerChoices.length - 1)

    if (turns <= 0) {
      stillTurn = false;
      gameOn ? setTimeout(function(){ computerTurn(); }, 1500) : false;
    }
    updateTurn(turns)
  })

}


function realTimeCheck(num) {
  console.log("player = " + playerChoices)
  console.log("computer = " + computerChoices)
  if (playerChoices[num] != computerChoices[num] && strictMode) {
    $('#header').text("You lose!")
    gameOn = false
    reset()
  } else if (playerChoices[num] != computerChoices[num] && !strictMode){
    replay = true
    computerTurn()
  }
}

function animateTile(num) {
  var sound = tiles[num].sound
  var tile = tiles[num].color
  $("."+tile).animateCss("animated pulse")
  $("."+tile).addClass(tile + "-bright");
  window.setTimeout(function(){$("."+tile).removeClass(tile + "-bright");}, 600);
  sound.play()
}

function reset() {
  replay = false
  playerChoices = []
  computerChoices = []
  updateTurn(0)
  turns = 0
}

function updateTurn(num) {
  $("#turn").text("Turn: " + num)
}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});
// code from https://stackoverflow.com/a/14853974
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
