---
title: Intro to Tone.js part 2
published: true
---


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
		"attack" : 0.1,
		"decay": 0.1,
		"sustain": 0.9,
		"release": 1
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
		"attack" : 0.1,
		"decay": 0.1,
		"sustain": 0.9,
		"release": 1
 }
}).toMaster();
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

#### Change some parameters of the oscillator

``` javascript
var synth = new Tone.MonoSynth({
	"oscillator" : {
		"type" : "square"
 },
 "envelope" : {
		"attack" : 0.1,
		"decay": 0.1,
		"sustain": 0.9,
		"release": 1
 }
}).toMaster();
synth.triggerAttackRelease("C4", "8n");
```

# Use a different synthesizer: (http://tonejs.org/docs/)

```javascript
var amSynth = new Tone.AMSynth().toMaster();
//synth.triggerAttackRelease("C4", "4n");

var drumSynth = new Tone.DrumSynth().toMaster();
// synth.triggerAttackRelease("C2", "8n");

var plucky = new Tone.PluckSynth().toMaster();
// plucky.triggerAttack("C4"); // modeled with instrument no controllable sustain

var fmSynth = new Tone.FMSynth().toMaster();
// fmSynth.triggerAttackRelease("C5", "4n");

```
## We will spend more time exploring these different synths (later)

#### Let's wrap a PolySynth around one of our Synthesizer instruments to allow for multiple

```javascript

    var poly = new Tone.PolySynth(6, Tone.FMSynth).toMaster();

    poly.triggerAttackRelease(["C4", "G4", "C5", "E5"], .7, 0);
		poly.triggerAttackRelease(["C4", "G4", "C5", "E5"], .7, 1);
		poly.triggerAttackRelease(["C4", "G4", "C5", "E5"], .7, 2);

		poly.triggerAttackRelease(["D4", "A4", "D5", "F5"], .7, 3);

		poly.triggerAttackRelease(["A3", "A4", "C5", "E5"], .7, 4);
		poly.triggerAttackRelease(["A3", "A4", "C5", "E5"], .7, 5);
		poly.triggerAttackRelease(["A3", "A4", "C5", "E5"], .7, 6);

		poly.triggerAttackRelease(["G3", "A4", "C5", "E5"], .7, 7);
```


### What is a more elegant way to code this? What can we do with arrays?
