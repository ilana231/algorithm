var movingRect, fixedRect


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,200,70,60);
  movingRect.shapeColor = "blue";
  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "blue"
}

function draw() {
  background(0);  

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
      && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
      && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
      && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
      movingRect.shapeColor = "pink";
      fixedRect.shapeColor = "pink";
 }
  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;


  drawSprites();
}