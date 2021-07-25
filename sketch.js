var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  oleafImage=loadImage("orangeLeaf.png")
  gleafImage=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x=mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
spawnApple();
spawnOLeaf();
spawnGLeaf();
  drawSprites();
}

function spawnApple(){
  if(frameCount%80===0){
    var apple=createSprite(random(40,360),0,10,10)
    apple.addImage(appleImg);
    apple.scale=0.05
    apple.velocityY=2;
    apple.lifetime=200
  }
}


function spawnOLeaf(){
  if(frameCount%100===0){
    var oleaf=createSprite(random(40,360),0,10,10)
    oleaf.addImage(oleafImage);
    oleaf.scale=0.05
    oleaf.velocityY=2;
    oleaf.lifetime=200;
  }
}


function spawnGLeaf(){
  if(frameCount%150===0){
    var gleaf=createSprite(random(40,360),0,10,10)
    gleaf.addImage(gleafImage);
    gleaf.scale=0.05
    gleaf.velocityY=2;
    gleaf.lifetime=200
  }
}