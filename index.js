

// var buttonColours = ["red" , "blue",  "yellow",  "green"];
// var gamepattern = [];
// var userClickPattern = [];
// var level = 0;



// $(document).on("keypress",function()
// {
//     $("h1").text("Level"+" "+level);
//     randomNo();
// });


// $(".btn").on("click",function()
// {
//     var userChosencolor  = $(this).attr("id");

//     userClickPattern.push(userChosencolor);
//     console.log(""+userClickPattern);
//     soundplay(userClickPattern);
//     Animate(userChosencolor);
//     checking(userClickPattern);
// }); 
// function checking(userNo)
// {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


 
//  function randomNo(){

// level++;
   
//     var random = Math.floor(Math.random()*4);
//     var randomChosenColor = buttonColours[random];
    
//     gamepattern.push(randomChosenColor);
//     $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    
//     soundplay(randomChosenColor);
    
//  }


// //  function nextSequence() {
// //   userClickedPattern = [];
// //   level++;
// //   $("#level-title").text("Level " + level);
// //   var randomNumber = Math.floor(Math.random() * 4);
// //   var randomChosenColour = buttonColours[randomNumber];
// //   gamePattern.push(randomChosenColour);

// //   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
// //   playSound(randomChosenColour);
// // }

// function Animate(color)
// {
//   $("#"+color).fadeIn(100).fadeOut(100).fadeIn(100);
// }
 


// function soundplay(name)  {

//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
  
// }













































var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
 
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}