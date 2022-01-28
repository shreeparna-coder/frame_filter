function preload(){
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

}

function draw()
{
    image(video, 0, 0, 300, 300);

    stroke(255, 255, 0);
  fill(255, 255, 0);
  rect(80, 30, 300, 40);
  
  fill(255, 255, 0);
  stroke(255, 255, 0);
  rect(340, 50, 40, 300);
  
  fill(100, 0, 70);
  stroke(100, 0, 70);
  circle(350, 50, 70);
  
  fill(100, 0, 70);
  stroke(100, 0, 70);
  circle(350, 50, 70);
  
  fill(255, 255, 0);
  stroke(255, 255, 0);
  rect(50, 330, 300, 40);
  
  fill(100, 0, 70);
  stroke(100, 0, 70);
  circle(360, 340, 70);
  
  fill(255, 255, 0);
  stroke(255, 255, 0);
  rect(40, 40, 40, 300 );
  
  fill(100, 0, 70);
  stroke(100, 0, 70);
  circle(50, 50, 70);
  
  
  fill(100, 0, 70);
  stroke(100, 0, 70);
  circle(50, 340, 70);
    
}

function take_snapshot()
{
    save('birthday_pic.png');
}