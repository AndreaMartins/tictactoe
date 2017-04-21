
function Tictac(){
  this.board = [["f","f","f"],
                ["f","f","f"],
                ["f","f","f"]];
};

//CHECK WINNER
Tictac.prototype.checkWinner = function(){
  // line0
  if (this.board[0][0] === "x" && this.board[0][1] === "x" && this.board[0][2] === "x"){
    setTimeout (function() {
    Tictac.prototype.showWinner1();}, 300);
    setTimeout(function(){
      reStart ();},1300);
    // this.board = this.newBoard;
  };
  // line1
  if (this.board[1][0] === "x" && this.board[1][1] === "x" && this.board[1][2] === "x"){
    setTimeout (function() {
    Tictac.prototype.showWinner1();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // line2
  if (this.board[2][0] === "x" && this.board[2][1] === "x" && this.board[2][2] === "x"){
    setTimeout (function() {
    Tictac.prototype.showWinner1();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // column0
  if (this.board[0][0] === "x" && this.board[1][0] === "x" && this.board[2][0] === "x"){
    setTimeout (function() {
    Tictac.prototype.showWinner1();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // column1
  if (this.board[0][1] === "x" && this.board[1][1] === "x" && this.board[2][1] === "x"){
    setTimeout (function() {
    Tictac.prototype.showWinner1();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // column2
  if (this.board[0][2] === "x" && this.board[1][2] === "x" && this.board[2][2] === "x"){
    setTimeout (function() {
    Tictac.prototype.showWinner1();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // diagonal right
  if (this.board[0][0] === "x" && this.board[1][1] === "x" && this.board[2][2] === "x"){
    setTimeout (function() {
    Tictac.prototype.showWinner1();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // diagonal left
  if (this.board[0][2] === "x" && this.board[1][1] === "x" && this.board[2][0] === "x"){
    setTimeout (function() {
    Tictac.prototype.showWinner1();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // line0
  if (this.board[0][0] === "o" && this.board[0][1] === "o" && this.board[0][2] === "o"){
    setTimeout (function() {
    Tictac.prototype.showWinner2();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // line1
  if (this.board[1][0] === "o" && this.board[1][1] === "o" && this.board[1][2] === "o"){
    setTimeout (function() {
    Tictac.prototype.showWinner2();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // line2
  if (this.board[2][0] === "o" && this.board[2][1] === "o" && this.board[2][2] === "o"){
    setTimeout (function() {
    Tictac.prototype.showWinner2();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // column0
  if (this.board[0][0] === "o" && this.board[1][0] === "o" && this.board[2][0] === "o"){
    setTimeout (function() {
    Tictac.prototype.showWinner2();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // column1
  if (this.board[0][1] === "o" && this.board[1][1] === "o" && this.board[2][1] === "o"){
    setTimeout (function() {
    Tictac.prototype.showWinner2();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // column2
  if (this.board[0][2] === "o" && this.board[1][2] === "o" && this.board[2][2] === "o"){
    setTimeout (function() {
    Tictac.prototype.showWinner2();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // diagonal right
  if (this.board[0][0] == "o" && this.board[1][1] === "o" && (this.board[2][2] === "o")){
    setTimeout (function() {
    Tictac.prototype.showWinner2();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  };
  // diagonal left
  if (this.board[0][2] === "o" && this.board[1][1] === "o" && this.board[2][0] === "o"){
    setTimeout (function() {
    Tictac.prototype.showWinner2();}, 300);
    setTimeout(function(){
      reStart ();},1300);

  };
  // document.getElementsByClassName('.celltictac').style.pointerEvents = 'none'
  if ((this.board[0][0]!=="f" && this.board[0][1]!=="f" && this.board[0][2]!=="f")
    && (this.board[1][0] !=="f" && this.board[1][1]!=="f" && this.board[1][2]!=="f")
    && (this.board[2][0]!=="f" && this.board[2][1]!=="f" && this.board[2][2]!=="f")){
    setTimeout (function() {
    Tictac.prototype.showWinnerNo();}, 300);
    setTimeout(function(){
      reStart ();},1300);
  }
};

//CHOICE TRANSFORM THE BOARD
Tictac.prototype.choice = function(idChoiced,player1,player2,begin){
  console.log(begin);
  if (begin === true){
    if ( player1 === true ){
    // change p1
    if(idChoiced === "p1") {
      this.board[0][0] = "x";
      document.getElementById("p1").style.backgroundColor = player1Color;
      document.getElementById('p1').style.pointerEvents = 'none';
    };
    // change p2
    if(idChoiced === "p2") {
      this.board[0][1] = "x";
      document.getElementById("p2").style.backgroundColor = player1Color;
      document.getElementById('p2').style.pointerEvents = 'none';
    };
    // change p3
    if(idChoiced === "p3") {
      this.board[0][2] = "x";
      document.getElementById("p3").style.backgroundColor = player1Color;
      document.getElementById('p3').style.pointerEvents = 'none';
    };
    // change p4
    if(idChoiced === "p4") {
      this.board[1][0] = "x";
      document.getElementById("p4").style.backgroundColor = player1Color;
      document.getElementById('p4').style.pointerEvents = 'none';
    };
    // change p5
    if(idChoiced === "p5") {
      this.board[1][1] = "x";
      document.getElementById("p5").style.backgroundColor = player1Color;
      document.getElementById('p5').style.pointerEvents = 'none';
    };
    // change p6
    if(idChoiced === "p6") {
      this.board[1][2] = "x";
      document.getElementById("p6").style.backgroundColor = player1Color;
      document.getElementById('p6').style.pointerEvents = 'none';
    };
    // change p7
    if(idChoiced === "p7") {
      this.board[2][0] = "x";
      document.getElementById("p7").style.backgroundColor = player1Color;
      document.getElementById('p7').style.pointerEvents = 'none';
    };
    // change p8
    if(idChoiced === "p8") {
      this.board[2][1] = "x";
      document.getElementById("p8").style.backgroundColor = player1Color;
      document.getElementById('p8').style.pointerEvents = 'none';
    };
    // change p9
    if(idChoiced === "p9") {
      this.board[2][2] = "x";
      document.getElementById("p9").style.backgroundColor = player1Color;
      document.getElementById('p9').style.pointerEvents = 'none';
    };
    };
    if ( player2 === true ){
    // change p1
    if(idChoiced === "p1") {
      this.board[0][0] = "o";
      document.getElementById("p1").style.backgroundColor = player2Color;
      document.getElementById('p1').style.pointerEvents = 'none';
    };
    // change p2
    if(idChoiced === "p2") {
      this.board[0][1] = "o";
      document.getElementById("p2").style.backgroundColor = player2Color;
      document.getElementById('p2').style.pointerEvents = 'none';
    };
    // change p3
    if(idChoiced === "p3") {
      this.board[0][2] = "o";
      document.getElementById("p3").style.backgroundColor = player2Color;
      document.getElementById('p3').style.pointerEvents = 'none';
    };
    // change p4
    if(idChoiced === "p4") {
      this.board[1][0] = "o";
      document.getElementById("p4").style.backgroundColor = player2Color;
      document.getElementById('p4').style.pointerEvents = 'none';
    };
    // change p5
    if(idChoiced === "p5") {
      this.board[1][1] = "o";
      document.getElementById("p5").style.backgroundColor = player2Color;
      document.getElementById('p5').style.pointerEvents = 'none';
    };
    // change p6
    if(idChoiced === "p6") {
      this.board[1][2] = "o";
      document.getElementById("p6").style.backgroundColor = player2Color;
      document.getElementById('p6').style.pointerEvents = 'none';
    };
    // change p7
    if(idChoiced === "p7") {
      this.board[2][0] = "o";
      document.getElementById("p7").style.backgroundColor = player2Color;
      document.getElementById('p7').style.pointerEvents = 'none';
    };
    // change p8
    if(idChoiced === "p8") {
      this.board[2][1] = "o";
      document.getElementById("p8").style.backgroundColor = player2Color;
      document.getElementById('p8').style.pointerEvents = 'none';
    };
    // change p9
    if(idChoiced === "p9") {
      this.board[2][2] = "o";
      document.getElementById("p9").style.backgroundColor = player2Color;
      document.getElementById('p9').style.pointerEvents = 'none';
    };
  };
    }
    console.log(this.board);
    game.checkWinner();
  };

//SHOW THE WINNER
Tictac.prototype.showWinner1 = function(){
  console.log(player1Name)
  totalP1++
  console.log(totalP1);
  $("#popupwinner").html(player1Name +" "+ "is the winner").show();
  $("#popupwinner").addClass("popup");
}
Tictac.prototype.showWinner2 = function(){
  console.log(player2Name)
  totalP2++
  console.log(totalP1);
  $("#popupwinner").html(player2Name +" "+ "is the winner").show();
  $("#popupwinner").addClass("popup");
}
Tictac.prototype.showWinnerNo = function(){
  console.log(player1Name)
  $("#popupwinner").html( "There is no winner").show();
  $("#popupwinner").addClass("popup");
};

//COUNTING TOTAL SCORE
Tictac.prototype.totalScore = function(){
  console.log("inside totalscore")
  $("#totalscore").html("Final score:"+ " " +player1Name + " " +"made"+ " " + totalP1 +" " + "points"+ " " + "and " + " " +player2Name +" " + "made"+ " " +totalP2 + " " +"points").show();
  $("#totalscore").addClass("totalscore");
}







//1. START NEW GAME // FUNCTION CLEAR BOARD

//2. STOP THE GAME WHEN WINNING// start another board

//3. ADD TIME LINE AND SHOW RESULTS WHEN TIME IS OUT

//4. ORGANIZE GAME WITH PROTOTYPES
