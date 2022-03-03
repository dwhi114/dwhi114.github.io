let slider;

const synth = new Tone.DuoSynth({

  "vibratoAmount": 0.5,
  "vibratoRate": 5,
  "harmonicity": 1.5,
  "voice0": {
      "volume": -10,
      "portamento": 0,
      "oscillator": {
          "type": "sine"
      },
      "filterEnvelope": {
          "attack": 0.01,
          "decay": 0,
          "sustain": 1,
          "release": 0.5
      },
      "envelope": {
          "attack": 0.01,
          "decay": 0,
          "sustain": 1,
          "release": 0.5
      }
  },
  "voice1": {
      "volume": -20,
      "portamento": 0,
      "oscillator": {
          "type": "sine"
      },
      "filterEnvelope": {
          "attack": 0.01,
          "decay": 0,
          "sustain": 1,
          "release": 0.5
      },
      "envelope": {
          "attack": 0.01,
          "decay": 0,
          "sustain": 1,
          "release": 0.5
      }
  }
});

const vibrato = new Tone.Vibrato({
  "frequency": 2.5,
	"depth": 0.7,
	"type": "triangle",
  "wet": 0.75
})

vibrato.toDestination();
synth.connect(vibrato);

let notes = {
  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'
}

function setup() {
  createCanvas(400, 400);

  slider = new Nexus.Slider('#slider');
  slider.on('change', (v) =>{
    vibrato.wet.value = v;
  })
}

function draw() {
  background(220);
  textSize(16);
  text('Use the keys A through K to play a C Major Scale', 5, 20);
  text('The slider will adjust the wetness for the vibrato effect', 5, 40);
}

function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);
  synth.triggerAttackRelease(toPlay, 0.5);
}