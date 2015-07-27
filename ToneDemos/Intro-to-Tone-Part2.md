# Intro-to-Tone-Part2.md
Let's start making some sound. For this next lesson, we will focus on
- creating sound
- controlling envelopes
- expressing time in Tone.js

#  

We will create a synthesizer instrument by calling a new *instance* of the Tone.js MonoSynth class.

To create a new MonoSynth instrument, open your `test.html` file and type the following between the `<script> </script>` brackets:

``` javascript
var synth = new Tone.MonoSynth({
	"oscillator" : {
		"type" : "square"
 },
 "envelope" : {
 	"attack" : 0.1
 }
}).toMaster();
synth.triggerAttackRelease("C4", "8n");
```
- Save this page and load it in your browser.

What did you hear?


Let's dissect the code and figure out what is happening AND how to change things.

```javascript
 var synth = new Tone.MonoSynth({
	"oscillator" : {
		"type" : "square"
 },
 "envelope" : {
 	"attack" : 0.1
 }
}
```

The first half the code is a creating a new instance of ```Tone.MonoSynth```.
```javascript
var synth = new Tone.MonoSynth();
```

is the simplest way to call the new synth.

What parameters have we also added?

The MonoSynth *Class* has members which are "Parameters" we can change:
```javascript
frequency:"C4"
detune:0
oscillator:{
  type:"square"
}
filter:{
  Q:6
  type:"lowpass"
  rolloff:-24
}
  envelope:{
    attack:0.005
    decay:0.1
    sustain:0.9
    release:1
}
filterEnvelope:{
  attack:0.06
  decay:0.2
  sustain:0.5
  release:2
  min:20
  max:4000
  exponent:2
}
```

"Oscillator" is a member of MonoSynth, which has a parameter type we can change. Currently, we are using Square, but all possiblities are **sine, square, triangle, or sawtooth.** These are basic waveforms, which we will discuss further.

- Let's change the oscillator type to something else (sine, square, triangle, or sawtooth)
- Save your file and reload the page.

- Can you hear the difference in the sound?
- Can you describe the difference?


### \* Changing the Oscillator type changes the overall tone.

What other parts of the sound can are controlling in the code?

"envelope" is a member of MonoSynth, which has a parameter "attack" wich we can change.

- Right now, we have the attack set to 0.1. This number a duration.
- Let's change it to 0.7 and hear what happens.
- Let's change it to something even bigger and hear what happens.

> In Tone.js, Time expressed in numbers (1.5) refers to SECONDS. We will cover different ways of expressing time soon.

Before we go much further, let's discuss a new concept: ADSR

# ADSR (Attack, Sustain, Decay, Release)

![adsr](https://upload.wikimedia.org/wikipedia/commons/e/ea/ADSR_parameter.svg "adsr_image")

Above we show a graphic of ADSR envelope.
- What is an envelope in real life?
- What is an envelope in musical programming?
