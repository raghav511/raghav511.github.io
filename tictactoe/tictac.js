// store player data in localstorage
// var name1 = document.getElementById("player1");
// console.log(name1);
// function startGame() {
//   window.location.assign("board.html");
//   var name1 = document.getElementById("player1").value;
//   localStorage.setItem("player1", name1);
//   var name2 = document.getElementById("player2").value;
//   localStorage.setItem("player2", name2);
// }
//moves and players
var moves = ["X", "O"];
var players = [
  localStorage.getItem("player1"),
  localStorage.getItem("player2"),
];
//initial score of players
var score = [0, 0];
//winning score
const winScore = [7, 56, 73, 84, 85, 105, 146, 150, 273, 292, 341, 448, 484];

//by default initialize the first player
document.getElementById("player").innerHTML = players[0];
//by default initialize to "X"
var moveOf = 0;
// switches between 0 and 1 for moves and players
function switchMoves() {
  if (moveOf == 0) {
    moveOf = 1;
  } else moveOf = 0;
}
function winner() {
  for (i = 0; i < winScore.length; i++) {
    if ((score[moveOf] & winScore[i]) == winScore[i]) {
      document.getElementById("player").innerHTML =
        players[moveOf] + " is winner";

      //if won, stop accepting symbols
      moves[0] = "";
      moves[1] = "";
      //final score of player1
      // localStorage.removeItem(players[0]);
      // p1 = p1 + score[0];
      return winner();
      localStorage.setItem("players[0]", score[0]);
      localStorage.setItem("players[1]", score[1]);
      score[0] = 0;
      score[1] = 0;
    }
  }
}

function draw() {
  if (score[0] + score[1] == 511) {
    document.getElementById("player").innerText = "draw";
  }
}

function endGame() {}
function play(boxClicked, boxValue) {
  //if the box is non-blocking space, then do something
  if (boxClicked.innerHTML == "&nbsp;") {
    //insert moves(X or O)
    boxClicked.innerHTML = moves[moveOf];
    //insert scores into score array
    score[moveOf] = score[moveOf] + boxValue;
    console.log(score);
    //check winner
    winner();
    switchMoves();
    //displays the next player
    document.getElementById("player").innerHTML = players[moveOf];
    // checkdraw();
    draw();
  }
}
