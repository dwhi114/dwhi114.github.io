let spriteSheet;
let character = [];
let count = 10;
let startTime;
let gameState = 'wait';
let counter = 0;

function preload(){
  spriteSheet = loadImage("Bugs.png");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);

  for(i = 0; i < count; i++){
    character[i] = new Character(spriteSheet, random(100, 500), random(100,500), random([-1,1]));
  }
}

function timer(){
  return int((millis() - startTime) / 1000);
}

function mousePressed(){
  let dmin = -1;
  let character_id = -1;

  for (i = 0; i < count; i++){
    let d = character[i].grabCheck();
    if (d != -1){
      if (dmin == -1 || d < dmin){
        dmin = d;
        character_id = i;
      }
    }
  }
  if(character_id != 1){
    character[character_id].grab();
    character[character_id].squish();
  }
 }

function draw() {
  background(255, 255, 255);
  if(gameState == 'wait'){
    textSize(30);
    text('Press any key to start', 150, 300);
    if(mouseIsPressed){
      startTime = millis();
      gameState = 'playing';
    }
  }
  else if(gameState == 'playing'){
    for(i = 0; i < count; i++){
      character[i].draw();
  }
    let time = timer();
    text("Time: " + time, 10, 30);
    if (time >= 30){
      gameState = 'end'
    }
   text("Score: " + counter, 10, 60);
  }
  else if(gameState == 'end'){
    text("Game over", 150, 300);
    text("Press any key to restart", 150, 400);
    counter = 0;
    if(mouseIsPressed){
      startTime = millis();
      gameState = 'playing';
    }
  }
}

class Character {
  constructor(spriteSheet, x, y, move){
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;
    this.move = move;
    this.facing = move;
    this.grabbed = false;
    this.spriteFrame = 0;
    this.dead = false;
  }

  animate(){
    let sx, sy;
    if(this.move == 0){
      if(this.grabbed){
        sx = 9;
        sy = 0;
      }
      else {
        sx = 0;
        sy = 0;
      }
    }
    else{
      sx = this.spriteFrame % 8 + 1;
      sy = 0
    }
    return [sx, sy];
  }

  draw(){
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);
    rotate(PI/2);

    let [sx, sy] = this.animate();
    image(this.spriteSheet, 0, 0, 100, 100, 80 * sx, 80 * sy, 80, 80);

    if(frameCount % 5){
      this.spriteFrame += 1;
    }
   
    this.x += 2 * this.move;

    if(this.x < 45){
      this.move = 1;
      this.facing = 1;
    }
    else if(this.x > width - 45){
      this.move = -1;
      this.facing = -1;
    }
    pop();
  }

  go(direction){
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }

  stop(){
    this.move = 0;
  }

  grabCheck(){
    let d = -1;
    if(mouseX > this.x - 60 && mouseX < this.x + 60 && mouseY > this.y - 60 && mouseY < this.y + 60){
      d = dist(mouseX, mouseY, this.x, this.y);
    }
    return d;
  }
  grab(){
      this.stop();
      this.grabbed = true;
      counter++;
    }
  squish(){
    this.squish = true;
  }
}

