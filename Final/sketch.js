// Declaring my variables
var angle = 0;


// set up the canvas
function setup() {
createCanvas( 500 , 450 );
//Slider for the tree
slider = createSlider(0, TWO_PI, PI/4, 0.01);

}
//Draw Function
function draw() {
  //Background Color
background('black');

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

  }
