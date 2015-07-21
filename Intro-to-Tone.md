
# Intro to Musical Coding with Tone.js
[Link to this page](http://nickhwang.com)
[Weblink to tone.js](http://cdn.tonejs.org/latest/Tone.min.js): http://cdn.tonejs.org/latest/Tone.min.js


## Concepts Covered
- Tone.js
- Object Orienting Programming
- Javascript: Objects, Class, Instance, Members/Properties, Methods, Functions, Returns, Console
- Conditionals: loops (for, while, if, else)

# Examples in Tone.js
[Blocks:](htt://somewhere.com)


# Timing with Tone.js
Time (Music is time based. Interesting things should happen in relation to time)
Transport object methods setInterval(), setTimeout(), setTimeline()


# Our Tools
### 1.	Atom - our code editor
We will be being Atom application to edit all our code.
When you have written some code, be sure to save the code.
When you want to view page, open that page with 
### 2.	Chrome - our browser
We will use Chrome to view our pages. Chrome will knows to interpret **Javascript**, the language we will be using with Node.js.
### 3.	console - our debugging tool within Chrome
When we code, use debugging tools to help us (the coders) check for problems (bugs) within the code. If a portion or all of the code does not work, debugging methods will help us find (and solve those problems). When we are working with Tone.js this week, we will use console to help us check on code. 

# Let’s Code!
We will set a page with in Atom. 
1. Open Atom at in Applications folder.
2. Copy the code below:
```
<!DOCTYPE html>
<head>
		<title>ConsoleTest</title>
		<script type="text/javascript" src="http://cdn.tonejs.org/latest/Tone.min.js"></script>
	</head>
	<body>
		<script id="ToneCode" type="text/javascript">
	
		Your awesome code go here! 

		</script>
</body>
</html>
```
3. Save the file. 
4. Open the file in Chrome. 
5. What do you see? What do you hear?

**Let’s add a console log message to ourselves**. 

Add the line of code below inside the `<script> </script>` brackets.  

		`console.log("Hello World");`

Save the file and reopen it Chrome. 

What do you see?
Anything?

Let's open our javascript console by hitting (**option + shift + j**). A smaller window should open on your browser. If you are using Safari (**option + shift + c**) will open the console.

You should be able to see the words 'Hello World' just as we typed out in code. 


# Let's make some sounds!
Create synthesizer (whatever one):
Copy the code below into Atom, save the file 

Below is an example block of code:
		newOscillator == new omniOscillator;

Create an oscillator with a filter
How do we route audio?

Create a noise generator with a filter
Adjust the filter over time

Let's use enveloping on the oscillator, on the noise 

Let's create an array of oscillators or noise generators

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