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

randomNumber1 = dice();
randomNumber2 = dice();
pic1 = selectPic(randomNumber1);
pic2 = selectPic(randomNumber2);

document.querySelector("img.img1").setAttribute("src",pic1);
document.querySelector("img.img2").setAttribute("src",pic2);