/* by Danny Holmes 2015 */

var toneNotes = ["C0", "Db0", "D0", "Eb0", "E0", "F0", "Gb0", "G0", "Ab0", "A0", "Bb0", "B0",
                "C1", "Db1", "D1", "Eb1", "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "B1",
                "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
                "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3",
                "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4",
                "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5",
                "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6",
                "C7", "Db7", "D7", "Eb7", "E7", "F7", "Gb7", "G7", "Ab7", "A7", "Bb7", "B7",
                "C8", "Db8", "D8", "Eb8", "E8", "F8", "Gb8", "G8", "Ab8", "A8", "Bb8", "B8",
                "C9", "Db9", "D9", "Eb9", "E9", "F9", "Gb9", "G9", "Ab9", "A9", "Bb9", "B9",
                "C10", "Db10", "D10", "Eb10", "E10", "F10", "Gb10", "G10", "Ab10", "A10", "Bb10", "B10",
                "C11", "Db11", "D11", "Eb11", "E11", "F11", "Gb11", "G11", "Ab11", "A11", "Bb11", "B11",
                "C12", "Db12", "D12", "Eb12", "E12", "F12", "Gb12", "G12", "Ab12", "A12", "Bb12", "B12", "C13"];


///////////////////////////////////////
/* Functions for making scale arrays */
///////////////////////////////////////

/* Example use */
/*
var scale = makeScale(scales[4],0); // The second variable is optional and defaults to 0. It accepts integers or note names (e.g. "C").
scale = convertScale(scale);
console.log(scale);
*/

var scales = ["chromatic", "major", "natural minor", "ionian", "dorian", "phrygian", "lydian", "mixolydian", "aeolian", "locrian", "major pentatonic", "minor pentatonic", "whole tone", "octatonic1", "octatonic2"];
/* This makes an array of integers */
function makeScale(scale, root) {
    var intervals = [];
    var base = 0;
    if (root) {
        switch (root) {
        case "C":
            base = 0;
            break;
        case "C#":
            base = 1;
            break;
        case "Db":
            base = 1;
            break;
        case "D":
            base = 2;
            break;
        case "D#":
            base = 3;
            break;
        case "Eb":
            base = 3;
            break;
        case "E":
            base = 4;
            break;
        case "F":
            base = 5;
            break
        case "F#":
            base = 6;
            break;
        case "Gb":
            base = 6;
            break;
        case "G":
            base = 7;
            break;
        case "G#":
            base = 8;
            break;
        case "Ab":
            base = 8;
            break;
        case "A":
            base = 9;
            break;
        case "A#":
            base = 10;
            break;
        case "Bb":
            base = 10;
            break;
        case "B":
            base = 11;
            break;
        default:
            base = root;
        }
    }
    var theNote = base;
    var theScale = [base];

    switch (scale) {
    case "chromatic":
        intervals = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        break;
    case "major":
        intervals = [2, 2, 1, 2, 2, 2, 1];
        break;
    case "natural minor":
        intervals = [2, 1, 2, 2, 1, 2, 2];
        break;
    case "ionian":
        intervals = [2, 2, 1, 2, 2, 2, 1];
        break;
    case "dorian":
        intervals = [2, 1, 2, 2, 2, 1, 2];
        break;
    case "phrygian":
        intervals = [1, 2, 2, 2, 1, 2, 2];
        break;
    case "lydian":
        intervals = [2, 2, 2, 1, 2, 2, 1];
        break;
    case "mixolydian":
        intervals = [2, 2, 1, 2, 2, 1, 2];
        break
    case "aeolian":
        intervals = [2, 1, 2, 2, 1, 2, 2];
        break;
    case "locrian":
        intervals = [1, 2, 2, 1, 2, 2, 2];
        break;
    case "major pentatonic":
        intervals = [2, 2, 3, 2, 3];
        break;
    case "minor pentatonic":
        intervals = [3, 2, 2, 3, 2];
        break;
    case "whole tone":
        intervals = [2, 2, 2, 2, 2, 2];
        break;
    case "octatonic1":
        intervals = [1, 2, 1, 2, 1, 2, 1, 2];
        break;
    case "octatonic2":
        intervals = [2, 1, 2, 1, 2, 1, 2, 1];
        break;
    default:
        nil
    }

    for (i = 0; i < 127; i++) {
        index = i % intervals.length;
        mod = intervals[index];
        theNote = theNote + mod;
        theScale.push(theNote);
    }

    return theScale;
}

/* This takes in an array of integers and converts each to a note name + octave number (e.g. “C4”) and outputs an array of strings */

function convertScale(scale) {
    var newScale = [];
    for (i = 0; i < scale.length; i++) {
        newScale.push(pcToNote(scale[i]));
    }
    return newScale;
}

function pcToNote(pc) {
    var letterNames = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
    var octave = ((pc - (pc % 12)) / 12);
    var letter = letterNames[pc % 12];
    var note = letter + octave.toString();

    return note;
}