var astronaut;

function preload(){
  bg=loadImage("Images/iss.png");
  bath=loadAmination("Images/bath1.png","Images/bath2.png");
  brush=loadImage("Images/brush.png");
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
  
  text("Instructions",400,200)
  drawSprites();
}