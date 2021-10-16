const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase1,player,computerbase1,computer1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
  playerBase1=new Playerbase(500,random(450,height-300),180,150)
  player1=new Player(485,playerBase1.body.position.y-153,50,180)

  computerbase1=new ComputerBase(100,random(450,height-300),180,150)
  computer1=new Computer(85,computerbase1.body.position.y-153,50,180)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  playerBase1.display()
  player1.display()
 computerbase1.display()
computer1.display()
}
