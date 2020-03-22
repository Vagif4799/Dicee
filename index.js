// Generating random number
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
// Implementing The Title
var titleOfPage = document.querySelector("h1");
if (randomNumber1 === randomNumber2) {
    titleOfPage.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    titleOfPage.innerHTML = "Player 1 Wins!";
} else {
    titleOfPage.innerHTML = "Player 2 Wins!";
}

// Implementing random picture source
var img1ValueSource = "images/dice"+randomNumber1+".png";
var img2ValueSource = "images/dice"+randomNumber2+".png";
// Assigning images to the variable
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
// Setting its attribute to the generated source
image1.setAttribute("src", img1ValueSource);
image2.setAttribute("src", img2ValueSource);
