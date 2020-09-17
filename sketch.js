
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var ground,rope1;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobobject1 = new PaperBall(400,400,20);
  bobobject4 = new PaperBall(440,400,20);
  bobobject2= new PaperBall(480,400,20 );
  bobobject3 = new PaperBall(360,400,20);

  bobobject5 = new PaperBall(320,400,20);
    

    ground = new Ground(400,200,200,20);
    
   rope1 = new Chain(bobobject1.body,ground.body,-bobDiameter*2,0);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  ground.display();
  rope1.display();
 
  drawSprites();
 
}



