var astronaut;
var sleep;

function preload(){
  bg=loadImage("Images/iss.png");
  bath=loadAnimation("Images/bath1.png","Images/bath2.png");
  brush=loadAnimation("Images/brush.png");
  drink=loadAnimation("Images/drink1.png","Images/drink2.png");
  eat=loadAnimation("Images/eat1.png","Images/eat2.png");
  gym=loadAnimation("Images/gym11.png","Images/gym12.png");
  move=loadAnimation("Images/move.png","Images/move1.png");
  sleep=loadAnimation("Images/sleep.png");
}

function setup() {
  createCanvas(800,400);
  

}

function draw() {
  background(bg); 
  
  astronaut=createSprite(300,230) 
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale=0.1;

  text("Instructions",10,20)
  text("Up Arrow=Brushing",10,40)
  text("Down Arrow=Gymming",10,60)
  text("Right Arrow=Bathing",10,80)
  text("Left Arrow=Eating",10,100)
  text("M key=Moving",10,120)

  if(keyCode==UP_ARROW){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=230
    astronaut.x=300
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyCode==DOWN_ARROW){
    astronaut.addAnimation("Gymming",gym)
    astronaut.changeAnimation("Gymming")
    astronaut.y=230
    astronaut.x=300
    astronaut.velocityX=0
    astronaut.velocityY=0
  }

  if(keyCode==RIGHT_ARROW){
    astronaut.addAnimation("Bathing",bath)
    astronaut.changeAnimation("Bathing")
    astronaut.x=300
    astronaut.y=230
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyCode=="m"){
    astronaut.velocityX=2
    astronaut.velocityY=3
  }
  drawSprites();
}