var scope1 = new WavyJones(Tone.context, 'oscilloscope1');
var scope2 = new WavyJones(Tone.context, 'oscilloscope2');
var scope3 = new WavyJones(Tone.context, 'oscilloscope3');
var scope4 = new WavyJones(Tone.context, 'oscilloscope4');
var scope5 = new WavyJones(Tone.context, 'oscilloscope5');
var scope6 = new WavyJones(Tone.context, 'oscilloscope6');

scope1.connect(Tone.Master);
scope2.connect(Tone.Master);
scope3.connect(Tone.Master);
scope4.connect(Tone.Master);
scope5.connect(Tone.Master);
scope6.connect(Tone.Master);

var sineOsc = new Tone.Oscillator({
	frequency: 440,
	type: "sine",
	volume: -12
}).connect(scope1);

var sawOsc = new Tone.Oscillator({
	frequency: 440,
	volume: -12
}).connect(scope2);

var lowPassFilter = new Tone.Filter({
	type: "lowpass",
	frequency: 5000,
	Q: 10
}).connect(scope5);

var filterOsc = new Tone.Oscillator({
	type: "sawtooth",
	frequency: 440,
	volume: -12
}).connect(lowPassFilter);

var phaseOsc1 = new Tone.Oscillator({
	frequency: 440,
	volume: -12
}).connect(scope3);

var phaseOsc2 = new Tone.Oscillator({
	frequency: 440,
	volume: -12
}).connect(scope3);

var beatOsc1 = new Tone.Oscillator({
	type: "sine",
	frequency: 440,
	volume: -12
}).connect(scope4);

var beatOsc2 = new Tone.Oscillator({
	type: "sine",
	frequency: 441,
	volume: -12
}).connect(scope4);

var fmSynth = new Tone.FMSynth({
	harmonicity: 0,
	modulationIndex: 0,
	modulator: {
		oscillator: {
			type: "sine"
		}
	}
}).connect(scope6);


nx.onload = function(){
	nx.sendsTo("js");

	nx.colorize("fill", "#B4AEA2");
	nx.colorize("accent", "#fccf22");

	sineFreqSlider.hslider = true;
	sineFreqSlider.draw();

	sawPartialNumber.decimalPlaces = 0;

	phaseSlider.hslider = true;
	phaseSlider.draw();

	beatFreqNumber.decimalPlaces = 0;

	sineFreqSlider.set({
		value: 0.330
	}, true);

	sineVolSlider.set({
		value: 0.8
	}, true);

	sawPartialNumber.set({
		value: 1
	}, true);


	cutoffFrequencyDial.set({
		value: 1
	}, true);


	phaseSlider.set({
		value: 0
	}, true);

	beatFreqNumber.set({
		value: 1
	}, true);

	fmPosition.set({
		x: 0,
		y: 0
	}, true);

	sineToggle.on('*', function(data){
		if (data.value == 1){
			sineOsc.start();
		}else if (data.value == 0){
			sineOsc.stop();
		}
	});

	sineFreqSlider.on('*', function(data){
		var frequency = data.value * 900 + 100;
		sineOsc.frequency.value = frequency;
		document.getElementById("freqLabel").innerHTML = "Frequency: " + frequency + "Hz";
	});

	sineVolSlider.on('*', function(data){
		var volume = Math.floor(data.value * 60 - 60);
		sineOsc.volume.value = volume;
		document.getElementById("volLabel").innerHTML = "Level: " + volume + " dB";
	});

	sawToggle.on('*', function(data){
		if (data.value == 1){
			sawOsc.start();
		}else if (data.value == 0){
			sawOsc.stop();
		}
	});

	sawPartialNumber.on('*', function(data){
		if (data.value >= 1){
			sawOsc.type = "sawtooth" + (data.value + 1);
		}
	});

	filterToggle.on('*', function(data){
		if (data.value == 1){
			filterOsc.start();
		}else if (data.value == 0){
			filterOsc.stop();
		}
	});

	cutoffFrequencyDial.on('*', function(data){
		var cutoff = Math.floor(data.value * 5000);
		lowPassFilter.frequency.value = cutoff;
		document.getElementById("cutoffLabel").innerHTML = "Cutoff Frequency: " + cutoff + " Hz";
	});

	phaseSineToggle.on('*', function(data){
		if (data.value == 1){
			phaseOsc1.type = "sine";
			phaseOsc2.type = "sine";
			phaseOsc1.start();
			phaseOsc2.start();
			phaseTriToggle.set({
				value: 0
			}, false);
		}else if (data.value == 0){
			phaseOsc1.stop();
			phaseOsc2.stop();
		}
	});

	phaseTriToggle.on('*', function(data){
		if (data.value == 1){
			phaseOsc1.type = "triangle";
			phaseOsc2.type = "triangle";
			phaseOsc1.start();
			phaseOsc2.start();
			phaseSineToggle.set({
				value: 0
			}, false);
		}else if (data.value == 0){
			phaseOsc1.stop();
			phaseOsc2.stop();
		}
	});

	phaseSlider.on('*', function(data){
		var phase = Math.floor(data.value * 180);
		phaseOsc2.phase = phase;
		document.getElementById("phaseLabel").innerHTML = phase + "&deg; Out of Phase";
	});

	beatToggle.on('*', function(data){
		if (data.value == 1){
			beatOsc1.start();
			beatOsc2.start();
		}else if (data.value == 0){
			beatOsc1.stop();
			beatOsc2.stop();
		}
	});

	beatFreqNumber.on('*', function(data){
		beatOsc2.frequency.value = beatOsc1.frequency.value + data.value;
	});

	fmToggle.on('*', function(data){
		if (data.value == 1){
			fmSynth.triggerAttack("A4");
		}else if (data.value == 0){
			fmSynth.triggerRelease();
		}
	});

	fmPosition.on('*', function(data){
		var index = data.y * 10;
		var harmonicity = data.x * 3;

		fmSynth.modulationIndex.value = index;
		fmSynth.harmonicity.value = harmonicity;
	});
}
