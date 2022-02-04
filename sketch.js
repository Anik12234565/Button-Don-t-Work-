
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;


var ball;
var ground;
var	leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,675,2200,20);
	leftSide = new Ground(1270,600,20,120);
	rightSide = new Ground(1400,600,20,120);


	ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	  }
	  ball = Bodies.circle(240,120,15, ball_options);
	  World.add(world, ball);
	
    

	Engine.run(engine);
	
	rectMode(CENTER);
  	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);
  ellipse(ball.position.x , ball.position.y ,15 ,15);
  
  drawSprites();
 
}

function KeyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}
}

