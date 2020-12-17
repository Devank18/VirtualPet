var database;
var dog, happyDogImg,feedMeDogImg
var foodS, foodStockReference;

function preload()
{
  happyDogImg = loadImage("images/happilyFed.png");
  feedMeDogImg = loadImage("images/feedMe.png");
}

function setup() {
  database = firebase.database();

  createCanvas(500, 500);
  
  dog = createSprite(250,250) ;
  dog.scale = 0.5;
  dog.addImage(feedMeDogImg);
  
  foodStockReference = database.ref('/Food');
  foodStockReference.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(happyDogImg);
  }

  drawSprites();
  fill ("red");
  textSize(18);
  stroke ("blue");
  text ("Press UP_ARROW Key Tp Feed Drago Milk!",80,50);

}

function readStock(data){
    foodS = data.val();
    //console.log(foodS);
}

function writeStock(foodValue){
   //console.log(foodValues)
    database.ref('/').update({
      Food : foodValue-1
    })
}

