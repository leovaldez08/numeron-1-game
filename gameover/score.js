// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score");

var scoreBoard = document.getElementById("score-board");

const playAgain = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgain.onclick = () =>{
    location.href = "../gameplay/game.html"
};