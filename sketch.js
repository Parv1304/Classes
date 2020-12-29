const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground;
var circ;
function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground();
  box1 = new Box(100,200,50,100);
  box2=new Box(130,50,50,70);

}

function draw() 
{
  background("lightblue");
  Engine.update(engine);
  box1.display();
  ground.display();
  box2.display();
   
}