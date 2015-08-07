---
title: Intro to Tone.js
published: true
---






[return to ProMusic2015](/Programming-Music/ProMusic2015) | [Intro to Tone part 2](Intro-to-Tone-Part2)

# Intro to Musical Coding with Tone.js :musical_note:
This page is written in Markdown and can be viewed within Atom. To open view as Markdown in Atom press (shift+control+m).

[Link to this page](http://lsu-emdm.github.io/Programming-Music/ToneDemos/Intro-to-Tone-Part1): http://lsu-emdm.github.io/Programming-Music/ToneDemos/Intro-to-Tone-Part1

[Weblink to Tone.js](http://cdn.tonejs.org/latest/Tone.min.js): http://cdn.tonejs.org/latest/Tone.min.js


## Concepts Covered
- Tone.js
- Object Orienting Programming
- Javascript: Objects, Class, Instance, Members/Properties, Methods, Functions, Returns, Console

## Examples in Tone.js
[Blocks chords](htt://somewhere.com)

## Our Tools

### 1.	Atom - our code editor
We will be using Atom application to edit all our code.
When you have written some code, be sure to save the code.
When you want to view page, open that page with

### 2.	Chrome - our browser
We will use Chrome to view our pages. Chrome will knows to interpret **Javascript**, the language we will be using with Node.js.

### 3.	Console - our debugging tool within Chrome
When we code, we use debugging tools to help us (the coders) check for problems (bugs) within the code. If a portion or all of the code does not work, debugging methods will help us find (and solve those problems). When we are working with Tone.js this week, we will use the console to help us check on our code.

# Let’s Code!
We will create a page within Atom.
1. Open Atom which is in the Applications folder (maybe on your dock).
2. Click File > New File to create a new file. (command + n) will also create a new file.
3. Copy the code below and paste in the new file: 

    <html>
      <head>
              <title>ConsoleTest</title>
              <script type="text/javascript" src="http://cdn.tonejs.org/latest/Tone.min.js"></script>
          </head>
          <body>
              <script id="ToneCode" type="text/javascript">
      
              <!-- Your awesome code go here! >
      
              // More awesome code!
      
              </script>
      </body>
    </html>
    

4. Save the file.
5. Open the file in Chrome.
6. What do you see? What do you hear?

----

**Let’s add a console log message to ourselves**.

1. Add the line of code below inside the `<script> </script>` brackets. When we work with **Javascript** and **Tone.js**, almost all the code we use will be inside the `<script> </script>` brackets.

		console.log("Hello World");

2. Save the file and reopen it Chrome.

	What do you see? Anything?

3. Open our javascript console by hitting (**option + shift + j**). A smaller window should open on your browser. If you are using Safari (**option + shift + c**) will open the console.

	You should be able to see the words 'Hello World' just as we typed out in code.

	You have just created a message to yourself through the console. There will be times where you want to test a certain aspect of your code (maybe checking the time, or the value of a certain variable, or which section of music you might be in)-- you will do this separate from the user interface which you design in **BRAID**.

-----

**Now, let's create some code and look for a message in the console**

## Create a variable
A variable piece of data we want to use. A variable could be a value or name. As the word 'variable' suggests, the information assigned to it can change.

Let's create a variable and **assign** something to it. Type out the lines below and be sure to capitalize the certain letters.

    var myName;
    var myName = "Nick";
    var myNeighborsName;
    myNeighborsName = "Danny";

We've created two variables `myName` and `myNeighborsName`. Now, let's tell the browser's console to print those names. Add the following text:

    console.log(myName);
    console.log(myNeighborsName);

What do you think will appear in the console? Did you notice we removed the "quotation marks" when we are calling a variable?

What happens when we use `console.log(myNeighborsName, myName);`   ?

**EXPERIMENT ON YOUR OWN**: ( *3 minute exercise* )

Create a new message to yourself. Experiment with these ideas below:

- Try different variables.
- How can be reduce the number of lines of code but still achieve the same outcome?
- Try solving a math equation:

1)

    var addend1 = 20;
    var addend2 = 10;
    var solution = addend1 + addend2;
    console.log(solution);

- Try using different values or a different math operation (subtraction or multiplication).
- Try purposely calling a variable you didn't create. What does console tell you?
