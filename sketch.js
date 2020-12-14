//Create variables here
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dog,foodstock
var happydog,database
var foodS
var remaining=20
var milkbottle
var feeddog
var updatefoodstock
var getfoodstock

function preload()
{
  happydog=loadImage("images/dogImg1.png")
  dog1=loadImage("images/dogImg.png")
milkbottle=loadImage("images/Milk.png")
}





function setup() {

  createCanvas(500, 500);
  engine = Engine.create();
  world = engine.world;
  

  dog=createSprite(250,300,20,20)
  dog.addImage(dog1,250,300)
  dog.scale=0.2
  database=firebase.database()
  foodstock=database.ref("Food")
  foodstock.on("value",read,writeStock)
  feeddog=createButton("Click here to feed the dog")
  feeddog.position(400,100)
  getfoodstock=createButton("Click here to get food")
getfoodstock.position(600,100)
getfoodstock.mousePressed(getfood)
feeddog.mousePressed(feedfood)
}


function draw() {  
background(46,139,87)
// if(keyWentDown(UP_ARROW)){
//   writeStock(foodS)
//   dog.addImage(happydog,250,300)
// }
var x=80,y=100
if(foodS!=0){
for(var i=0;i<foodS;i++){
if(i%10===0){
   x=80,y=y+20
}
imageMode(CENTER)
image(milkbottle,x,y,30,30)
x=x+20
}
}

  drawSprites();
  //add styles here
//   fill("yellow")
//   textSize(15)
// text("Note:Press Up_Arrow key to feed drago milk!",100,30)

fill("yellow")
  textSize(15)
text("Food remaining: "+ foodS,180,200)
}
function read(data){
foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
database.ref("/").update({
  Food:x
})

}
function getfood(){
foodS=foodS+1
database.ref("/").update({
  Food:foodstock
})
}
function feedfood(){
  if(foodS>0){
    foodS=foodS-1
    dog.addImage(happydog,250,300)
  }
  database.ref("/").update({
    Food:foodstock
    
  })
  }
  
  


