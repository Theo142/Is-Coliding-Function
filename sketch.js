var rect1

var rect2


function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(400, 260, 50, 50);
}

function draw() {
  background(255,255,255);  

rect2.x = mouseX
rect2.y = mouseY

if (rect2.x - rect1.x < rect1.width/2 + rect2.width/2 &&
  rect1.x - rect2.x < rect1.width/2 + rect2.width/2 &&
  rect1.y - rect2.y < rect1.height/2 + rect2.height/2 &&
  rect2.y - rect1.y < rect1.height/2 + rect2.height/2)
{
  rect1.shapeColor="orange"
  rect2.shapeColor="orange"
}

else
{
  rect1.shapeColor = "blue"
  rect2.shapeColor = "blue"
}
  drawSprites();
}