
var backImage,back;
var bridge,ridge;
var my,myImage;
var obstacle,thing,obstacleGroup;
var support,balance;
var jumpSound,outSound;
var ground,invisibleGround;
var out,rock,rocksGroup;
var PLAY=1;
var gameState = PLAY;
var END=0;
var score;
function preload(){
backImage=loadImage("back.jpg");
ridge=loadImage("pngtree-hand-painted-wood-bridge-png-image_4655474-removebg-preview (1).png");

balance=loadImage("pngtree-wood-bridge-png-image_4732233-removebg-preview.png");

  obstacle=loadImage("Tx_Box-removebg-preview.png");

rock=loadImage("obstacle.png");
  
  jumpSound=loadSound("331381__qubodup__public-domain-jump-sound.wav");
  
 outSound=loadSound("391536__mativve__electro-loose-sound.wav"); 
  
myImage=loadAnimation("WhatsApp_Image_2020-10-30_at_8.41.58_AM-removebg-preview.png","WhatsApp_Image_2020-10-30_at_8.41.58_AM__1_-removebg-preview.png","WhatsApp_Image_2020-10-30_at_8.41.59_AM-removebg-preview.png","WhatsApp_Image_2020-10-30_at_8.41.59_AM__1_-removebg-preview.png","WhatsApp_Image_2020-10-30_at_8.42.00_AM-removebg-preview.png","WhatsApp_Image_2020-10-30_at_8.42.00_AM__1_-removebg-preview.png");
}
 
function setup() {
 createCanvas(500,600);
  
  obstacleGroup=new Group();
  rocksGroup=new Group();
back=createSprite(300,200,10,10);
back.addImage(backImage);
back.scale=03;
back.velocityX=-4;  
 
my=createSprite(100,350,1,10);
my.addAnimation("running",myImage);
my.scale=0.3;

score=0;
  
bridge=createSprite(300,400,10,10);
bridge.addImage(ridge);
bridge.scale=02;
bridge.velocityX=-10;
  
support=createSprite(200,540,10,10);
support.addImage(balance);
support.scale=01;
support.velocityX=-10;
  
ground=createSprite(200,470,400,10);
my.setCollider("rectangle",0,0,0,my.height);
  my.debug = false;
  ground.visible=false;
}

function draw() {
  background(220)
  
  drawSprites();
  if(gameState === PLAY){
        
  if (bridge.x < 0){
      bridge.x = bridge.width/2;
    }
  if (back.x < 0){
      back.x = back.width/2;
    }
  if(keyDown("up")&& my.y >= 100){
    my.velocityY=-20;
  
    jumpSound.play();
  }
   my.velocityY =my.velocityY + 0.8
   my.collide(ground);
  
  score=score+1;
  things();
  stones();
  }
  textSize(30);
  fill("black");
  text()
  text("Score: "+ score, 300,50);
  
  if(obstacleGroup.isTouching(my)){
    gameState=END;
  }
  if(rocksGroup.isTouching(my)){
  
    
  
    gameState=END;

  }
  if(gameState === END){
    
    back.velocityX=0;
    bridge.velocityX=0;
    //thing.velocityX=0;
    out.velocityX=0;
    
    my.visible=false;
     textSize(30);
    text("you lose the game",200,300);
   
  }
 
  
}

function things(){
  if (frameCount %530 === 0) {
   thing = createSprite(600,500,20,20);
   thing .y = Math.round(random(1,60));
   thing .addImage(obstacle);
   thing.scale = 0.5;
   thing.velocityX = -1;
    thing.setLifetime=100;
   obstacleGroup.add(thing); 
    
    
}
}

function stones(){
   if(frameCount%400===0){
 out=createSprite(300,420,10,10);
 out .y = Math.round(random(300,420));
 out.addImage(rock);
 out.scale=0.2;
 out.velocityX=-5;
     out.setLifetime=50;
  out.depth = bridge.depth;
  bridge.depth = bridge.depth + 1;
    rocksGroup.add(out);   
     
     
}
}





  