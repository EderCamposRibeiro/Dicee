var randomNumber1 = 0;
var pic = '';

function dice(){
    return Math.floor(Math.random() * 6) + 1;;
}

function selectPic(dice) {
    selectPic = "images/dice" + dice + ".png";
    return selectPic;
}

randomNumber1 = dice();
pic = selectPic(randomNumber1);

document.querySelector("img.img1").setAttribute("src",pic);