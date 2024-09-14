//For first dice
var randomNumber1 =Math.floor( Math.random()*6) + 1;      // 1-6 random number
console.log(randomNumber1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png" ;  // string dice1.png  -dice6.png

var randomImageSource1 = "images/" + randomDiceImage1;     // images/Dice1.png - images/Dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

//For second dice
var randomNumber2 =Math.floor( Math.random()*6) + 1;      // 1-6 random number
console.log(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png" ;  // string dice1.png  -dice6.png

var randomImageSource2 = "images/" + randomDiceImage2;     // images/Dice1.png - images/Dice6.png

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//if player 1 wins
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
