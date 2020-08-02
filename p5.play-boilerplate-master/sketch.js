
var bird;
var pipes = [];
var bgimg;

function preload()
{
  bgimg = loadImage("animations/download.png");
}

function setup() 
{
  createCanvas(400, 600);
  pipes.push(new pipe());
  bird = new Bird();
}

function draw() 
{
  background(bgimg); 
  bird.update(); 
  bird.display();

  if(frameCount % 120 == 0)
  {
    pipes.push(new pipe());
  }

  for(var i = pipes.length - 1; i >= 0; i--)
  {
    pipes[i].display();
    pipes[i].update();

    if(pipes[i].offScreen())
    {
      pipes.splice(i, 1);
    }
  }
}

function keyPressed()
{
  if(keyCode == 32)
  {
    //console.log("SPACE");
    bird.up();
  }
}