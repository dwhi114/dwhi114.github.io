let col, red, orange, yellow, green, cyan, blue, magenta, brown, white, black;

let melody = ["C4", "A4", "F4", "D4", "G4"]
let melody2 =["C2", "A2", "F2", "D2", "G2"]

function preload(){
  synth = new Tone.AMSynth({
    "harmonicity": 3.999,
      "oscillator": {
          "type": "square"
      },
      "envelope": {
          "attack": 0.03,
          "decay": 0.3,
          "sustain": 0.7,
          "release": 0.8
      },
      "modulation" : {
          "volume" : 12,
          "type": "square6"
      },
      "modulationEnvelope" : {
          "attack": 2,
          "decay": 3,
          "sustain": 0.8,
          "release": 0.1
  }
  })
  
  freeverb = new Tone.Freeverb({
    "roomSize": 0.95,
    "dampening": 1200,
    "wet": 0.5
  })
  
  freeverb.toDestination();
  synth.connect(freeverb);
  Tone.Transport.start();
  
  sequence1 = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note, 0.5)
  }, melody, '8n');

  sequence2 = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note, 0.5)
  }, melody2, '4n');
}

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
  playMusic();
  if(mouseX < 45){
    if(mouseY > 5 && mouseY < 45){
      col = red;
    }
    else if(mouseY > 45 && mouseY < 85){
      col = orange
    }
    else if(mouseY > 85 && mouseY < 125){
      col = yellow;
    }
    else if(mouseY > 125 && mouseY < 165){
      col = green;
    }
    else if(mouseY > 165 && mouseY < 205){
      col = cyan;
    }
    else if(mouseY > 205 && mouseY < 245){
      col = blue;
    }
    else if(mouseY > 245 && mouseY < 285){
      col = magenta;
    }
    else if(mouseY > 285 && mouseY < 325){
      col = brown;
    }
    else if(mouseY > 325 && mouseY < 365){
      col = white;
    }
    else if(mouseY > 365 && mouseY < 405){
      col = black;
    }
  }
}

function mouseReleased(){
  sequence1.stop();
  sequence2.stop();
}

function paint(){
  stroke(col);
  strokeWeight(8);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function playMusic(){
  if(col == red || col == orange || col == yellow || col == green || col == blue || col == cyan){
    synth.triggerAttackRelease("C6", 0.5);
    sequence1.stop();
    sequence2.stop();
    sequence1.start();
  }
  else{
    synth.triggerAttackRelease("C6", 0.5);
    sequence1.stop();
    sequence2.stop();
    sequence2.start();
    }
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