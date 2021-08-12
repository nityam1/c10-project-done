var ship,ship_floating;
var sea


function preload(){

ship_floating = loadAnimation("ship-1.png","ship-2,png","ship-3.png","ship-4.png");
sea = loadAnimation("sea.png")



function setup(){
  createCanvas(400,400);
  ship = CreateSprite(50,160,20,50);
  ship.addAnimation("floating",ship_floating);
   ship.scale = 0.4;
   ship.x = 50;
  edges = createEdgeSprites();
  
sea = CreateSprite(200,180,400,20);
sea.addImage("sea","seaImage")
sea.x = sea.width/2
}

function draw() {
  background("blue");
 sea.velocityX = -2;

if(sea.x<0){
  sea.x = sea.width/2;
}



  ship.collide(sea);
}}
