var fixed , moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 100);
  fixed.debug=true;
  fixed.shapeColor="yellow";

   moving = createSprite(400, 200, 100, 50);
  moving.debug=true;
  moving.shapeColor="yellow";

}

function draw() {
  background(255,255,255);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;


  if(fixed.x - moving.x < fixed.width/2 + moving.width/2 &&
    moving.x - fixed.x < fixed.width/2 + moving.width/2 && 
    fixed.y - moving.y < fixed.height/2 + moving.height/2 &&
    moving.y - fixed.y < fixed.height/2 + moving.height/2 )  {
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }
  else
  {
    fixed.shapeColor="blue";
    moving.shapeColor="blue";
  }
//hello my name is jamal 


  drawSprites();
}