# squareFractals
a place to hold and host code for a web app that displays 511 square fractals 

Web app for square fractals.  

After making the snowflake fractal that came across in Feldman's "Chaos and fractals" book.  I started thinking about what shapes fractals could have if their seed shape was some configuration of a 3by3 square. 

I wrote some code to look at possible shapes systematically by having each grid configuration be a number from 0 to 511. This way I could systematically get all possible fractals. So an all black square would be decimal 511 or binary 111111111. 

The Feldman snowflake is then decimal 341 or binary 101010101 (this is a similar process to Wolfram's analysis of the 255 cellular automata). 

Then the seed is run through a recursive function to make it a fractal.   

The web app is made with p5js, you can choose to generate a random 3by 3 seed. Or you can enter binary. (I am using some regex to check that you only enter binary). The code is on my github and a link to the live app is on my website (link in my bio). #createivecoding #fractals #math #javascript #python


https://greggelong.github.io/squareFractals/
