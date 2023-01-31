var spr

function setup() 
{
  createCanvas(400, 400);
  spr = new Box(200,200,20,20,1,1);
}

function draw() 
{
  background(220);
  spr.show();
  spr.move();
  spr.moveup();
}

