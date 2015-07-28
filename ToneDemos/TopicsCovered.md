
# Tone.js Relevant Musicical, Acoustical, Physics Topics


Pitch ('note name') / Frequency (A, 440)
Pitch-Octave Representation (A4, C#5)

A musical score -- there's a score object in Tone.js


Filtering: Pass, Resonance/Peak/Notch,

Subtractive Synth
Percussive Synths (SubSynth, ADSR)

WaveForms
Sine, Square, Triangle, Sawtoof, Pulse, PWM
Partials



# Coding Topics

Objects, Identity, Instantiation/Instance,
Classes,
Methods, Functions,
Properties, Members


# Tone.js relevant topics, especially without UI

Timing, Clock, Notation, Transport, Syncing (with Transport)
(without UI objects, timing )
https://github.com/Tonejs/Tone.js/wiki/Time




----
# EVERYTHING BELOW HERE IS NOT SORTED and NOT READY

# Let's make some sounds!
Create synthesizer (whatever one):
Copy the code below into Atom, save the file

Below is an example block of code:
		newOscillator == new omniOscillator;

- The word 'new' tells **Javascript** to create a new **instance** of a predetermined **class**.

**WHAT IS A CLASS?**

Create an oscillator with a filter
How do we route audio?

Create a noise generator with a filter
Adjust the filter over time

Let's use enveloping on the oscillator, on the noise

Let's create an array of oscillators or noise generators

# Timing with Tone.js
Time (Music is time based. Interesting things should happen in relation to time)
Transport object methods setInterval(), setTimeout(), setTimeline()

## Let's get complicated!
FM, AM, Sampling

## Let's make it more interesting!
## Add Effects
Add reverb
Add panning

## Let's get back to timing
Let's create two instruments playing at once and discuss how to control them.
https://github.com/Tonejs/Tone.js/wiki/Time

Tone Sequencer


Mixer,
