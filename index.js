var randomNumber1 = 0;
var randomNumber2 = 0;
var pic1 = '';
var pic2 = '';

function dice(){
    return Math.floor(Math.random() * 6) + 1;;
}

function selectPic(dice) {
    return "images/dice" + dice + ".png";;
}

function verifyWinner(number1, number2){
    // 0 = Draw
    // 1 = number1 wins!
    // 2 = number0 wins!
    if (number1 > number2) {
        return "Player 1 Wins!"
    } else if (number1 < number2) {
        return "Player 2 Wins!"
    } else {
        return "Draw!";
    }
}

randomNumber1 = dice();
randomNumber2 = dice();
pic1 = selectPic(randomNumber1);
pic2 = selectPic(randomNumber2);

document.querySelector("img.img1").setAttribute("src",pic1);
document.querySelector("img.img2").setAttribute("src",pic2);

document.querySelector("h1").textContent = verifyWinner(randomNumber1, randomNumber2);