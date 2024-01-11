var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var result1 = "dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var result2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , result1);
document.querySelectorAll("img")[1].setAttribute("src" , result2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🇳🇵Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins🇳🇵";
}
else{
    document.querySelector("h1").innerHTML = "🇳🇵 Draw 🇳🇵";
}