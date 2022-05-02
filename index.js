var imageArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var player1, player2;

player1=Math.trunc((Math.random()*6));
player2=Math.trunc((Math.random()*6));

document.querySelector(".player1-img").setAttribute("src", imageArray[player1]);
document.querySelector(".player2-img").setAttribute("src", imageArray[player2]);

if(player1 > player2){
  document.querySelector("h2").innerHTML = "Player 1 Wins!";
}
else if(player1 < player2){
  document.querySelector("h2").innerHTML = "Player 2 Wins!";
}
else if(player1 == player2){
  document.querySelector("h2").innerHTML = "Draw!";
}
