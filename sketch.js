
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage=loadImage("images/boy.png")
	treeImage=loadImage("images/tree.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ground1= new ground(1000,500)
  boy=createSprite(200,340,50,50)
  boy.addImage(boyImage)
  tree=createSprite(600,240,50,50)
  tree.addImage(treeImage)
  mango1= new mango(700,100,30,30)
  mango2=new mango(700,50,30,30)
  mango3=new mango(500,50,30,30)
  mango4=new mango(600,50,30,30)

  boy.scale=0.2
  tree.scale=0.5
  stone1= new stone (70,230,50,50)
  slingshot1=new slingshot(stone1.body,{x:70,y:200})
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  ground1.display()
  mango1.display();
  mango2.display();
  mango3.display()
  mango4.display()
  stone1.display();
  slingshot1.display();
  detectollision(stone1,mango1)
  detectollision(stone1,mango2)
  detectollision(stone1,mango3)
  detectollision(stone1,mango4)
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	slingshot1.fly()
}
function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.radius+lstone.radius)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }




