//defining variables
var slant;
var x;

function setup() {
    createCanvas( 500, 500);
  slant = 250;
  x = 0;
}

//Establishing the draw function
function draw() {

// Establishing the colors
    background( 'grey' );
    stroke('pink');

//Creating the for loop to create my abstract grid design. Going from top to bottom.
for(var x= 0; x<800; x+= 40){
line(x, 0, x - slant, height);

}

// Creating the for loop going from bottom to top.
for(var x= 0; x<800; x+= 40){
  line(x, 0, x + slant, height);
}

}
