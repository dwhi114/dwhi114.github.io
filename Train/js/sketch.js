let train;

const synth = new Tone.NoiseSynth({
  "noise": {
    "type": "pink",
    "playbackRate" : 0.2
  },
  "envelope": {
    "attackCurve" : "ripple",
    "releaseCurve" : "ripple",
    "attack": 1,
    "decay": 0.3,
    "sustain": 0.8,
    "release": 1
  }
});

const pitchshift = new Tone.PitchShift({
  "pitch": -5,
	"windowSize": 0.05,
	"delayTime": 0.3,
	"feedback": 0.2,
  "wet": 0.5
});

const loopA = new Tone.Loop(time => {
 synth.triggerAttackRelease("C4", "4n");
}).start(0);

pitchshift.toDestination();
synth.connect(pitchshift);


function preload(){
  train = loadImage('media/train.png');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  if(mouseIsPressed){
    image(train, 0, 0);
  }
  else{
    textSize(20);
    text("Hold the left mouse button to see a train!", 100, 175);
  }
}

function mousePressed(){
  Tone.start();
  loopA.start(0);
  Tone.Transport.start();
}