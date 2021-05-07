var background;
var mario,mario_running, mario_wins;
var goomba, goomba_running, goombaImg;
var pipe,pipeImg;
var flower;
var coin, coinImg;
var mushroom, mushroomImg;
var cloud,cloudImg;
var ground,groundImg;
var goombagroup;
var pipegroup;
var coingroup;
var cloudgroup;
var mushroomgroup;
var brick1, brick2, brick3, brick4, brick5, brick6;
var longbrickImg, questionmarkbrickImg ,shortbrickImg;
var mariobig;
var GameState = 0;
var score = 0;
var coin = 0;

function preload(){

  //backgroud = loadImage("mario bg.png");
  groundImg = loadImage("mario ground.png");
  mario_running = loadAnimation("1.png", "2.png","3.png", "4.png","5.png","6.png", "7.png","8.png","9.png","10.png","11.png","12.png");
  cloudImg = loadImage("cloud.png");
  pipeImg = loadImage("pipe.png");
  goombaImg = loadAnimation("goombaenemy.png", "goombarunning.png");
  coinImg = loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png","coin7.png","coin8.png","coin9.png","coin10.png","coin11.png","coin12.png","coin13.png","coin14.png");
  longbrickImg = loadImage("longbrick.png");
  shortbrickImg = loadImage("shortbrick.png");
  questionmarkbrickImg = loadImage("question brick.png");
  mushroomImg = loadImage("mario mushroom.png")
  
}

function setup() {
createCanvas(1800,1000);
mariobig = createSprite(300,750,80,80);
mariobig.visible = false;
mario = createSprite(300,800,2,2);
mario.scale = 1;
mario.addAnimation("mario", mario_running);
ground = createSprite(900,960,1800,100);
ground.addImage(groundImg);
ground.scale = 1.5;
ground.velocityX = -9;
coingroup = new Group();
pipegroup = new Group();
goombagroup = new Group();
cloudgroup = new Group();
mushroomgroup = new Group();
brick3group = new Group();
brick4group = new Group();
brick5group = new Group();
mushroomgroup.setVisibleEach(false);

}

function draw() {
  background("skyblue"); 
 
textSize(40);
fill("red");  
text("Score:"+ score,1550,200)

  if(GameState === 0){
score = score + Math.round(getFrameRate()/60);
  if(ground.x<0){

ground.x = ground.width/2

  } 
  drawSprites();
  spawnClouds();
  spawnPipe();
  spawnGoomba();
  spawnCoins();
  spawnbrick1();
  spawnmushroom();

  if(mushroomgroup.isTouching(mario)){

mariobig.addAnimation("mario", mario_running);
mariobig.scale = 1.5;
mario.visible = false;
mariobig.visible = true;

  }
  if(brick4group.isTouching(mario)){
 mushroomgroup.setVisibleEach(true);
 brick4group.setVisibleEach(false);
  }

  if(keyDown("UP_ARROW")&& mariobig.y >= 750){

    mariobig.velocityY = -7;
    mario.velocityY = 0;
  }
  //mariobig.velocityY = mariobig.velocityY+0.1;

  if(keyDown("SPACE")&& mario.y >= 750){

    mario.velocityY = -10;
  }
  mario.velocityY = mario.velocityY+0.1;}
  mario.collide(ground);
}



function spawnClouds(){

if(frameCount%120 === 0){

cloud = createSprite(1800,400,40,30);
cloud.addImage(cloudImg);
cloud.velocityX = -4;
cloud.y = Math.round(random(150,400));
cloud.scale = 3;
cloudgroup.add(cloud);
cloud.lifetime = 800;
cloudgroup.add(cloud);


}

}

function spawnPipe(){

if(frameCount%1300 === 0){
pipe = createSprite(1800,775,10,10);
pipe.addImage(pipeImg);
pipe.velocityX = -3;
//pipe.x = Math.round(random(1800,500));
pipe.scale = 0.5
pipegroup.add(pipe);
pipe.lifetime = 800;
}

}


function spawnGoomba(){

  if(frameCount%500 === 0){
  
  goomba = createSprite(1800,850,40,30);
  goomba.addAnimation("goombaenemy", goombaImg);
  goomba.velocityX = -3;
  //goomba.x = Math.round(random(1800,500));
  goomba.scale = 0.6;
  goombagroup.add(goomba);
  goomba.lifetime = 800;
}
}


function spawnCoins(){

  if(frameCount%900 === 0){
  for(var i = 0; i <3 ; i ++){
  coin = createSprite(1800 + i * 90,500,40,30);
  coin.addAnimation("coin",coinImg);
  coin.velocityX = -4;
  //coin.y = Math.round(random(150,400));
  coin.scale = 1;
  coingroup.add(coin);
  coin.lifetime = 800;
  }
}}function spawnbrick1(){

  if(frameCount%300 === 0){
  brick3 = createSprite(1822,400,20,30);
  brick3.addImage(shortbrickImg);
  brick3.velocityX = -3;
  //brick1.x = Math.round(random(150,400));
  brick3.scale = 1.5;
  brick3.lifetime = 800;
  brick3group.add(brick3);

  }
  if(frameCount%300 === 0){
    brick4= createSprite(1900,400,20,30);
    brick4.addImage(questionmarkbrickImg);
    brick4.velocityX = -3;
    //brick1.x = Math.round(random(150,400));
    brick4.scale = 1.4;
    brick4.lifetime = 800;
    brick4group.add(brick4);

  }
    if(frameCount%300 === 0){
    brick5 = createSprite(1976,400,20,30);
    brick5.addImage(shortbrickImg);
    brick5.velocityX = -3;
    //brick1.x = Math.round(random(150,400));
    brick5.scale = 1.5;
    brick5.lifetime = 800;
    brick5group.add(brick5);
    }}

    function spawnmushroom(){
    if(frameCount%300 === 0){
      mushroom = createSprite(1900,300,20,30);
      mushroom.addImage(mushroomImg);
      mushroom.scale = 0.1;
      mushroomgroup.add(mushroom);
      mushroom.velocityX = -3;
      



    }}
