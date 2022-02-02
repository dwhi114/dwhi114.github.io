let col, red, orange, yellow, green, cyan, blue, magenta, brown, white, black;

function setup() {
  createCanvas(1200, 800);
  background(255, 255, 255);
  col = color(255, 255, 255);
  red = color(234, 65, 44);
  orange = color(239, 135, 52);
  yellow = color(255, 248, 74);
  green = color(119, 242, 59);
  cyan = color(116, 249, 252);
  blue = color(0, 68, 247);
  magenta = color(233, 93, 250);
  brown = color(119, 67, 21);
  white = color(255, 255, 255);
  black = color(0, 0, 0);
}

function mousePressed() {
  if(mouseX < 45){
    if(mouseY > 5 && mouseY < 45){
      col = red;
    }
    else if(mouseY > 45 && mouseY < 85){
      col = orange
    }
    else if(mouseY > 85 && mouseY < 125){
      col = yellow
    }
    else if(mouseY > 125 && mouseY < 165){
      col = green
    }
    else if(mouseY > 165 && mouseY < 205){
      col = cyan
    }
    else if(mouseY > 205 && mouseY < 245){
      col = blue
    }
    else if(mouseY > 245 && mouseY < 285){
      col = magenta
    }
    else if(mouseY > 285 && mouseY < 325){
      col = brown
    }
    else if(mouseY > 325 && mouseY < 365){
      col = white
    }
    else if(mouseY > 365 && mouseY < 405){
      col = black
    }
  }
}

function paint(){
  stroke(col);
  strokeWeight(8);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function draw() {
  if(mouseIsPressed){
    if(mouseX > 45){
      paint();
    }
  }
  
  noStroke();
  fill(red);
  square(5, 5, 35);

  fill(orange);
  square(5, 45, 35)

  fill(yellow);
  square(5, 85, 35);

  fill(green);
  square(5, 125, 35);

  fill(cyan);
  square(5, 165, 35);

  fill(blue);
  square(5, 205, 35);

  fill(magenta);
  square(5, 245, 35);

  fill(brown);
  square(5, 285, 35);

  fill(white);
  square(5, 325, 35);

  fill(black);
  square(5, 365, 35);
}