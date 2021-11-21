const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ball;
var ground;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("sprites/bg.png")
}

function setup() {
  var canvas = createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

box1 = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
box3 = new Box(700,240,70,70);
box4 = new Box(920,240,70,70);
box5 = new Box(810,160,70,70);

ground = new Ground(600,height,1200,20);

pig1 = new Pig(810,350);
pig2 = new Pig(810,220);

log1 = new Log(810,260,300,PI/2);
log2 = new Log(810,180,300,PI/2);
log3 = new Log(760,120,150,PI/7);
log4 = new Log(870,120,150,-PI/7);

bird1 = new Bird(870,120,150,-PI/7);

/*var ground_options = {
  isStatic: true
}

ground = Bodies.rectangle(200,390,200,20,ground_options);
World.add(world, ground);

var ball_options = {
  restitution:1.0
}

ball = Bodies.circle(200,100,20,ball_options);
World.add(world, ball);

console.log(ball.type);
console.log(ground.position.x);
console.log(ground.position.y);*/
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ground.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird1.display();
  
  /*rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);*/
}