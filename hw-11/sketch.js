
//Defining the array
var ball =[];

//seting up the canvas and array
function setup() {
  //canvas
    createCanvas( 800, 600);
    //Creating the array information
    for( var  i = 0; i < 10; i++) {
      var x= 30 + 75 * i;
      ball[i]= new orbs(x, 300, 25);
    }

}

function draw() {
    background('black');
    //Drawing the array
    for( var  i = 0; i < orbs.length; i++) {
      ball[i].move();
      ball[i].show();
    }
  }
//Creating the class for the floating purple orbs
class orbs {
  constructor(x,y,r) {
          this.x = x;
          this.y = y;
          this.r = r;
      }
// This will creating the movement for the orbs
      move() {
          this.x = this.x + random(-7, 7);
          this.y = this.y + random(-7, 7);
      }
// Drawing the orbs
      show() {
          noStroke();
          fill('blue');
          ellipse(this.x, this.y, this.r * 3);
      }
  }
