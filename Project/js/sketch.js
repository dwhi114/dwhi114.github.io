let serialPDM;
let portName = "COM3";
let randomGen;
let randomArray = [1, 2, 3, 4]
let triangleCol = (255, 255, 255);
let squareCol = (255, 255, 255);
let circleCol = (255, 255, 255);
let quadCol = (255, 255, 255);
let gameState = 'wait'
let startTime;

let sensor;

let melody = ["C4", "A4", "F4", "D4", "G4"];
let melody2 = ["C2", "A2", "F2", "D2", "G2"];
let melody3 = ["C6", "A6", "F6", "D6", "G6"];
let melody4 = ["C5", "A5", "F5", "D5", "G5"];

function setup() {
  serialPDM = new PDMSerial(portName);
  sensor = serialPDM.sensorData;
  
  createCanvas(1000, 1000);
  setInterval(setColor, 3000);
}

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
  }, melody, '4n');

  sequence2 = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note, 0.5)
  }, melody2, '4n');

  sequence3 = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note, 0.5)
  }, melody3, '4n');

  sequence4 = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note, 0.5)
  }, melody4, '4n');
}

function setColor(){
  randomGen = random(randomArray);
  if(randomGen == 1){
    triangleCol = color(255, 0, 0);
    squareCol = color(255, 255, 255);
    circleCol = color(255, 255, 255);
    quadCol = color(255, 255, 255);
    serialPDM.transmit('color', randomGen);
  }
  else if(randomGen == 2){
   squareCol = color(0, 0, 255);
   triangleCol = color(255, 255, 255);
   circleCol = color(255, 255, 255);
   quadCol = color(255, 255, 255);
   serialPDM.transmit('color', randomGen);
  }
  else if(randomGen == 3){
   circleCol = color(0, 255, 0);
   triangleCol = color(255, 255, 255);
   squareCol = color(255, 255, 255);
   quadCol = color(255, 255, 255);
   serialPDM.transmit('color', randomGen);
  }
  else if(randomGen == 4){
    quadCol = color(255, 255, 0);
    triangleCol = color(255, 255, 255);
    circleCol = color(255, 255, 255);
    squareCol = color(255, 255, 255);
    serialPDM.transmit('color', randomGen);
  }
  console.log(randomGen);
} 

function timer(){
  return int((millis() - startTime) / 1000);
}

function startSequence(){
  if(randomGen == 1){
   sequence1.start();
   sequence2.stop();
   sequence3.stop();
   sequence4.stop();
  }
  else if(randomGen == 2){
   sequence1.stop();
   sequence2.start();
   sequence3.stop();
   sequence4.stop();
  }
  else if(randomGen == 3){
   sequence1.stop();
   sequence2.stop();
   sequence3.start();
   sequence4.stop();
  }
  else if(randomGen == 4){
   sequence1.stop();
   sequence2.stop();
   sequence3.stop();
   sequence4.start();
  }
}

function stopSequence(){
  sequence1.stop();
  sequence2.stop();
  sequence3.stop();
  sequence4.stop();
}

function drawShapes() {

  stroke(50);
  strokeWeight(2);

  fill(triangleCol);
  triangle(330, 75, 358, 20, 386, 75);

  fill(squareCol);
  square(450, 150, 50);

  fill(circleCol);
  circle(350, 300, 65);

  fill(quadCol);
  quad(225, 135, 265, 175, 225, 215, 185, 175);
}

function draw(){
  background(255, 255, 255);
  if(gameState == 'wait'){
    stopSequence();
    textSize(30);
    text('Click your mouse to start', 150, 300);
    if(mouseIsPressed){
      startTime = millis();
      gameState = 'playing';
    }
  }
  if(gameState == 'playing'){
    drawShapes();
    startSequence();
    let time = timer();
    if(time >= 30){
      gameState = 'wait'
    }
  }
}