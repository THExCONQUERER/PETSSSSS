//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;


function preload()
{
  //load images here
  dog.loadImage("images/dogImg.png");
  happyDog.loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  
  var dog = createSprite(100, 100, 10, 10);
  dog.addImage(dog);
  
}


function draw() {  

  drawSprites();
  //add styles here

}



