---
title: Intro to Tone Part 3
published: true
---

[return to ProMusic2015](ProMusic2015) | [Intro to Tone part 2](Intro-to-Tone-Part2) | [Intro to Tone part 4](Intro-to-Tone-Part4)

# Intro-to-Tone-Part3
Let's start really controlling musical parameters, using
- arrays
- random processes
- organizing time and preparing for sequences and sampling
- chords
- for loops
#

We will create arrays of pitches and durations to drive a synthesizer.

To create an array in JavaScript, we


> JavaScript only uses numbered index.

    var nameArray = [];
    nameArray[0] = "Danny";
    nameArray[1] = "William";
    nameArray[2] = "Olivia"
    
    console.log(nameArray.length);


> Associative Arrays work to a point, they have an zero length.

    var namedArray = [];
    namedArray["Bestie"] = "William";
    namedArray["Bae"] = "Nick";
    namedArray["Jerk"] = "Danny";
    
    console.log(namedArray.length);

## Let's create some arrays!

1. Let's create an array of note names. (C4, F#5, etc.) -- call it noteArray

    var noteArray = [ whatever pitches you want ];


2. And create an array of durations. (.2, .8, 2, etc.) SECONDS -- call it durArray

    var durationArray = [ whatever durations you want ];

3. Now let's create a function that will RANDOMLY select a pitch from the pitch array and a random duration from the durations array.

    function () {
        var playNote = noteArray[Math.floor(Math.random() * noteArray.length)]
    }


4. Now to make the synthesizer play the random note at the random duration, we need to re-write the function to play, like we did earlier.

    synth.triggerAttackRelease(playNote, playDur);


### Cool, one note. But lets' play more than one note.

# For Loops
Let's tell javascript to go through our arrays by writing a 'for loop'

    for (i = 0; i < noteArray.length; i++) {
        var playNote = noteArray[Math.floor(Math.random() * noteArray.length)];
        var playDur = durArray[Math.floor(Math.random() * durArray.length)];
        console.log (playNote, playDur);
    }

We've added a line that tells Console to tell us which notes are being selected.

Let's look at the console, how fat does everything spit out?
We need to do some timing adjustments: we need to use setTimeout function.

    setTimeout('function', time);

Let's wrap our code with the setTimeout function.

There are a few more steps; Let's make it look right:


    function myRandomLoop () {     //  create a loop function
         setTimeout(function () {    //  call a 3s setTimeout when the loop is called
                playNote = noteArray[Math.floor(Math.random()*noteArray.length)];
                playDur = durArray[Math.floor(Math.random()*durArray.length)];
                console.log(playNote, playDur);
                synth.triggerAttackRelease(playNote, playDur);
    
                i++;                     //  increment the counter
                if (i < 30) {            //  if the counter < 10, call the loop function
                     myLoop();             //  ..  again which will trigger another
                }                        //  ..  setTimeout()
         }, playDur * 1000 + 10)
    }
