const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground;
var object1;


function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  var ground_option = {
    isStatic:true
  }

  ground = Bodies.rectangle(0,390,800,20,ground_option);
  World.add(world,ground);


  var object1_option = {
    restitution: 2.0
  }

  object1 = Bodies.rectangle(100,100,30,30,object1_option);
  World.add(world,object1);

}

function draw(){
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  //rect(200,200,50,50)
  rect(ground.position.x,ground.position.y,800,20)
  rect(object1.position.x,object1.position.y,30,30)
}

