const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(10000, 700);

	var ballOptions = {
		isStatic : false
		,restitution : 0.3
		,airFriction : 0.3
	}
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,690,10000,10);
	leftSide = new Ground(1500,650,10,70);
	rightSide = new Ground(1650,650,10,70);

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ballOptions);
	World.add(world, ball);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.09,y:-0.09});
	}
}


