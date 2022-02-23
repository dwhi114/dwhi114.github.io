const sounds = new Tone.Players({
  CelloC4: "media/CelloC4.mp3",
  CelloD4: "media/CelloD4.mp3",
  CelloF4: "media/CelloF4.mp3",
  CelloG4: "media/CelloG4.mp3",
  CelloB3: "media/CelloB3.mp3",
})

var delay = new Tone.FeedbackDelay("8n", 0.5);
var gain = new Tone.Gain().toDestination();

sounds.connect(delay);
delay.connect(gain);
sounds.connect(gain); 

let soundNames = ['CelloC4', 'CelloD4', 'CelloF4', 'CelloG4', 'CelloB3']
let button;
let buttons = [];

let slider1;

function setup() {
  createCanvas(460, 400);
  
  soundNames.forEach((pitch, index)=>{
    buttons[index] = createButton(pitch);
    buttons[index].position(175, index*50+100);
    buttons[index].mousePressed( () => buttonStart(pitch) );
    buttons[index].mouseReleased( () => buttonStop(pitch) );
  })

  slider1 = createSlider(0,1,0,0.05);
  slider1.mouseReleased(()=>{
    let delayTime = slider1.value();

    delay.delayTime.value = delayTime; 
  });
}

function draw() {
  background(220);
  textSize(18);
  text('Hold the button to hear the pitch indicated', 5, 20);
  text('Release the button to hear the delay effect', 5, 40);
  text('Holding for longer will set the length for the sound', 5, 60);
  text('Use this slider to change the frequency of the delay time', 5, 370);
  text('The lower the slider, the faster the delays become', 5, 390);
}

function buttonStart(sound) {
  sounds.player(sound).start();
}

function buttonStop(sound) {
  sounds.player(sound).stop();
}


