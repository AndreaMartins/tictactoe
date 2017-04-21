

$(document).ready(function() {
  game = new Tictac();
 })

var game;
 //COUNTING TOTAL SCORE
var totalP1 = 0;
var totalP2 = 0;
var player1;
var player2;
var player1Name;
var player2Name;
var player1Color = "";
var player2Color = "";
var begin = false

//CHOOSING COLOR PLAYER2
$("#choosemagenta").on("click",function(){
  console.log(player1Color)
  if(player1Color !== "") {
    $("#input-player2").css("background-color","magenta");
    return  player2Color=($("#choosemagenta")[0].innerHTML)
  } else {
      $("#input-player1").css("background-color","magenta");
      $(this).css("visibility", "hidden")
  return  player1Color=($("#choosemagenta")[0].innerHTML)
  }
})
$("#chooseblue").on("click",function(){
    if(player1Color !== "") {
      $("#input-player2").css("background-color","blue");
      return  player2Color=($("#chooseblue")[0].innerHTML)
    } else {
      $("#input-player1").css("background-color","blue");
      $(this).css("visibility", "hidden")
    return  player1Color=($("#chooseblue")[0].innerHTML)
    }
    })
$("#choosegreen").on("click",function(){
    if(player1Color !== "") {
      $("#input-player2").css("background-color","green");
      return  player2Color=($("#choosegreen")[0].innerHTML)
    } else {
         $("#input-player1").css("background-color","green");
         $(this).css("visibility", "hidden")
    return  player1Color=($("#choosegreen")[0].innerHTML)
    }
  })
//NAME OF PLAYERS
$("#submit-buttom1").on("click",function(){
  player1Name = $('#input-player1').val();
  $("#pname1").html(player1Name).addClass(".names").css('color',player1Color);
})
$("#submit-buttom2").on("click",function(){
  console.log($('#input-player2').val());
  player2Name = $('#input-player2').val();
  $("#pname2").html(player2Name).addClass(".names").css('color',player2Color);
  if ( player1Name !== "" && player2Name!=="" && player1Color!=="" && player2Color!=="" ){
    $(".celltictac").css("pointerEvents", "auto");
    begin = true
    var count = 60;
    timer = setInterval(function() {
        count--;
        $("#countergeneral").text(count);
        console.log(count);
        if(count == 0) {
          clearInterval(timer);
          game.totalScore()
        };
        // if(count == 1) clearInterval(timer);
    }, 1000);

  }
})

//RESTART
var reStart= function() {
  $(".celltictac").css("backgroundColor", "white")
  game = new Tictac();
  $( "#popupwinner" ).hide();
  $(".celltictac").css("pointerEvents", "auto");
  }

// CALL AND CHANGE PLAYERS
player1 = true
player2 = false
$( ".celltictac" ).on("click",function() {
  game.choice(this.id,player1, player2, begin);
    if(player1 === true) {
      player1 = false
      } else {
      player1 = true
      }
    if(player2 === true) {
      player2 = false
      } else {
      player2 = true
      }
  });






// gameStart = function(){
//   this.intervalID = setInterval(this.update.bind(this), 100)
// };
// gameStop= function(){
//   if(this.intervalID){
//     clearInterval(this.IntervalID);
//     this.IntervalID = undefined;
//   }
// }


// var reStart= function() {$( "#restart" ).on("click",function() {
//   $(".celltictac").css("backgroundColor", "grey")
//   game = new Tictac();
//   });
//   }
