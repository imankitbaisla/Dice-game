
var n=Math.random();
n=n*6;
n=Math.floor(n)+1;
var diceImage = "dice"+n+".png";
var imageSource = "images/"+diceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);

var n2 = Math.floor(Math.random()*6)+1;
var diceImage2 = "dice"+n2+".png";
var imageSource2 = "images/"+diceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource2);

if (n>n2){
   document.querySelector("h1").innerHTML="Player 1 WIN";
}
else if(n===n2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="PLayer 2 WIN";
}