const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{
  polygon_img = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


  ground = new Ground (420,295,250,10);
  fill("red");

    //level 1
   block1 = new Box (330,275,30,40);
   fill("red");
   block2 = new Box (360,275,30,40);
   fill("red");
   block3 = new Box (390,275,30,40);
   fill("red");
   block4 = new Box (420,275,30,40);
   fill("red");
   block5 = new Box (450,275,30,40);
   fill("red");
   block6 = new Box (480,275,30,40);  
   fill("red");
   block7 = new Box (510,275,30,40);
   fill("red");

   // level 2
   block8 = new Box (360,235,30,40);
   block9 = new Box (390,235,30,40);
   block10 = new Box (420,235,30,40);
   block11 = new Box (450,235,30,40);
   block12 = new Box (480,235,30,40);

   // level 3
   block13 = new Box(390,195,30,40);
   block14 = new Box(420,195,30,40);
   block15 = new Box(450,195,30,40);
   //top
   block16 = new Box (420,155,30,40);
   
   //polygon holder with sting
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
   

    slingShot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw(){
    background(0);
    Engine.update(engine);

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,{x:100,y:200});


    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    ground.display();

    slingShot.display();
    polygon.display();

    drawSprites();
    
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}
