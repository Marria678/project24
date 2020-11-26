
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Dustbin(400,650,800,20)
	dustbin1 = new Dustbin(720,565,20,150)
	dustbin2 = new Dustbin(610,630,200,20)
	dustbin3 = new Dustbin(520,565,20,150)

	Paper1 = new Paper(100,630,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  Paper1.display();
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  Engine.update(engine)
  
 
}



function keyPressed() {
	if (keyCode === 38) {
		Matter.Body.applyForce(Paper1.body, Paper1.body.position, {
			x: 0.05,
			y: -0.065,
		});
	}
}



