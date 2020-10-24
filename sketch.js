var bullet, thickness ;
var speed,weight,wall ;







function setup() {
  createCanvas(1600,400);
  thickness=random(20,80)
  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(50,200,20,3);
  bullet.velocityX = speed

  wall = createSprite(1200, 200, thickness , height/2);
  wall.shapeColor = color(80,80,80)
  
}
function draw() {
   
  background(0); 



  if(hascollide(bullet,wall)){
    bullet.velocityX = 0;
    var damage  =0.5 *weight * speed * speed/(thickness * thickness * thickness)
  
    if(damage>10) {
      wall.shapeColor = color(255,0,0)
    }
  
    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}


function hascollide(bullet , wall) {

  bulletRightEdge= bullet.x + bullet.width/2;
  wallLeftEdge   =  wall.x - wall.width/2 ;
  if(bulletRightEdge>=wallLeftEdge){
  
    return true;
  }
  return false;

  }
  