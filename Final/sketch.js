// Declaring my variables
var angle = 0;
var slider;
var snow = [];

// set up the canvas
function setup() {
createCanvas( 500 , 450 );
//Slider for the tree
slider = createSlider(0, TWO_PI, PI/4, 0.01);
//Snow Clouds
for( var  i = 0; i < 10; i++) {
  var x= 100 + 100 * i;
snow.push(new Snowflake(x,0,300));
}
}
//Draw Function
function draw() {
  //Background Color
background('black');
// Object set up for the snow clounds
for( var  i = 0; i < Snowflake.length; i++) {
  snow[i].move();
  snow[i].show();
}
//Slider and Branch of tree set up
angle = slider.value();
var len = 100;
translate(200, height);
stroke('white');
branch(110);
}
//Brand for tree movement
function branch(len){
  line(0, 0 , 0 , - len );
  translate(0, -len);
  if (len > 4){
  push();
  rotate(angle);
  branch (len*0.7);
  pop();
  push();
  rotate(-angle);
  branch(len*0.7);
  pop();
}
  }
  //Class for the clouds
  class Snowflake{
constructor(x,y,r) {
            this.x = x;
            this.y = y;
            this.r = r;
        }
  //Movement for the clouds
move() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
// Appearance for the clouds 
  show(){
    noStroke();
    fill('white');
    ellipse(this.x, this.y, this.r * .5);
    }

  }
