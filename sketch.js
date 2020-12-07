const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall,ground,dustbin1,dustbin2,dustbin3;
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paperBall=new Paper(100,350);
  ground=new Ground(400,580,800,20);
  dustbin1=new Dustbin(600,563,100,15);
  dustbin2=new Dustbin(550,529,15,80);
  dustbin3=new Dustbin(650,529,15,80);
  keyPressed();
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Body.applyForce(paperBall.body,paperBall.body.position,{x:55,y:-55});
  }
}