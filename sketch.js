const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 = [];
var backgroundImg, ground;
var bird, slingShot;

var srcWidth = window.innerWidth;
var srcHeight = window.innerHeight;
function preload() {
  backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
   
  var canvas = createCanvas(srcWidth,srcHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platformFlat1 = new Ground(srcWidth/4,srcHeight-50,300,10,rgb(0)); 
  platformFlat2 = new Ground(srcWidth/4,300,300,10,0);
  platformFlat3 = new Ground(srcWidth*3/4,srcHeight-50,300,10,0);
  platformFlat4 = new Ground(srcWidth*3/4,300,300,10,0);

  for(var i=0; i<10; i++){
    box1[i] = new Box(700,320,70,70);
  }

  bird = new Bird(srcWidth/2,srcHeight/2);
  slingShot = new SlingShot(bird.body,{x:srcWidth/2,y:srcHeight/2});
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  for(var i=0; i<10; i++){
    box1[i].display;
  }

  ground.display();

  bird.display();
  platformFlat1.display();
  platformFlat2.display();
  platformFlat3.display();
  platformFlat4.display();
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly(); 
}