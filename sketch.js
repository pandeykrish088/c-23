const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var ground
var box1
var box2

function setup() {
createCanvas(600,600);
engine = Engine.create();
world = engine.world
box1 = new Box()
box2 = new Box()
}

function draw() {
  background(0); 
  Engine.update(engine) 
  box1.display() ;
  box2.display() ;
}