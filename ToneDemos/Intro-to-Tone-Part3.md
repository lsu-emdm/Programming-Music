# Intro-to-Tone-Part3.md
Let's start really controlling musical parameters, using
- arrays
- random processes
- organizing time and preparing for sequences and sampling

#

We will create arrays of pitches and durations to drive a synthesizer.

To create an array in JavaScript, we


> JavaScript only uses numbered index.

```javascript
var nameArray = [];
nameArray[0] = "Danny";
nameArray[1] = "William";
nameArray[2] = "Olivia"

console.log(nameArray.length);
```

> Associative Arrays work to a point, they have an zero length.

```javascript
var namedArray = [];
namedArray["Bestie"] = "William";
namedArray["Bae"] = "Nick";
namedArray["Jerk"] = "Danny";

console.log(namedArray.length);
```
## Let's create some arrays!

1. Let's create an array of note names. (C4, F#5, etc.) -- call it noteArray

```javascript
var noteArray = [ whatever pitches you want ];
```

2. And create an array of durations. (.2, .8, 2, etc.) SECONDS -- call it durationArray

```javascript
var durationArray = [ whatever durations you want ];
```


Now let's create a function that will randomly selection a pitch from the pitch array and a random duration from the durations array.

Type out:
```javascript
function (){
	var playNote = noteArray[Math.floor(Math.random() * noteArray.length)]
}
```
Now to make the synthesizer play the random note at the random duration, we need to re-write the function to play, like we did earlier.

```
synth.triggerAttackRelease(playNote, playDur);
```
