function randomNumber1() {
  return Math.floor(Math.random() * (6 - 1) + 1);
}
function winner(a,b) {
  let result;
  if (a > b) {
    result = ' Player 1 win! ';
  }
  if (a < b)  {
    result = ' Player 2 win! ';
  }

  if (a === b)  {
    result = ' Draw! ';
  }
  return result;
}
var player1 = randomNumber1();
var player2 = randomNumber1();
var imgDice1 = "images/dice"+ player1 +".png";
var imgDice2 = "images/dice"+ player2 +".png";
console.log(document.querySelector("img.img1").setAttribute("src", imgDice1));
console.log(document.querySelector("img.img2").setAttribute("src", imgDice2));
console.log(document.querySelector("h1").innerHTML= winner(player1, player2));
