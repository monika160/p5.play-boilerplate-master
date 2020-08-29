var fixRect,moveRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(200, 200, 50, 80);
  moveRect = createSprite(400,200,80,30);
  fixRect.shapeColor = "green";
  moveRect.shapeColor ="green";
  moveRect.debug = true;
  fixRect.debug = true;

  moveRect.velocityY = -5;
  fixRect.velocityY = +5;
}

function draw() {
  background(0);  
  //moveRect.x =World.mouseX;
  //moveRect.y =World.mouseY;
 if(moveRect.x - fixRect.x < moveRect.width/2+fixRect.width/2 &&
   fixRect.x -moveRect.x < moveRect.width/2+fixRect.width/2 )
   {

    moveRect.velocityX = moveRect.velocityX * (-1);
    fixRect.velocityX = fixRect.velocityX * (-1);
   }
  if( moveRect.y- fixRect.y < moveRect.height/2+fixRect.height/2
   && fixRect.y- moveRect.y < moveRect.height/2+fixRect.height/2){
    moveRect.velocityY = moveRect.velocityY * (-1);
    fixRect.velocityY = fixRect.velocityY * (-1);
 }
 
  drawSprites();
}