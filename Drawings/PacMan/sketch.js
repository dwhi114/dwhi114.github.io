function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);
  
  fill(255,248,74);
  arc(200,200,350,350,5*QUARTER_PI, 3*QUARTER_PI, PIE);
  
  fill(234,65,44);
  rect(455,200,324,175);
  
  noStroke();
  arc(617,200,325,325,PI,0,PIE)
  
  fill(255);
  circle(525,200,100);
  circle(700,200,100);
  
  fill(0,68,247);
  circle(525,200,65);
  circle(700,200,65);
}