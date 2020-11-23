var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);


  bullet = createSprite(50, 200, 50, 10);
  bullet.velocityX = speed;

  
  
}

function draw() {
  background("black");  

  wall.shapeColor = 80,80,80;
  bullet.shapeColor = "white";

  if(isTouching()){
    bullet.velocityX = 0; 
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = "red";
    }

    if(damage < 10)
      wall.shapeColor = "green";
  }


  isTouching();
  drawSprites();
}

function isTouching(){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge=wall.x; 
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}