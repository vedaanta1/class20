
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball; 
var ground
var wedge;
var angle = 70;


function setup()
{

  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution: 0.95,
    friction: 0.01
  }
  var ground_options = {
    isStatic: true
  }

  var wedge_options = {
    isStatic: true
  }


  ball = Bodies.circle(100, 25, 20, ball_options);
  World.add(world, ball);
  ground = Bodies.rectangle(200, 390, 400, 10, ground_options);
  World.add(world, ground)
  wedge = Bodies.rectangle(180, 100, 130, 20, wedge_options);
  World.add(world, wedge)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(wedge, angle);
  push();
  translate(wedge.position.x, wedge.position.y)
  rotate(angle);
  rect(0, 0, 100, 20);
  pop();
  angle = angle + 0.1
  ellipse(ball.position.x, ball.position.y, 20);
  rect(ground.position.x, ground.position.y, 400, 10);
  fill("red");

 
}

