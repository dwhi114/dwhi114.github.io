function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,129);
  
  fill(0,128,0);
  stroke(255);
  strokeWeight(4);
  circle(200,200,150);
  
  beginShape();
  fill(255,0,0);
  vertex(200,120);
  vertex(220,175);
  vertex(275,175);
  vertex(230,210);
  vertex(250,260);
  vertex(200,230);
  vertex(155,260);
  vertex(170,210);
  vertex(130,175);
  vertex(180,175);
  vertex(200,120)
  
  endShape();
}