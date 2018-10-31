//declaring variables
var pos_x1 = 100;
var col = 0;
var b = 0;
var g = 255;


//floor function info for first circle
var pos_x2 = 400;
var pos_y = 400;
var point_width = 100;
var max_pos_mvt = 2;

//floor function for sencond Circle
var pos_x3 = 500;
var pos_y2 = 500;
var point_width = 100;
var max_pos_mvt = 2;

//floor function for third Circle
var pos_x4 = 600;
var pos_y3 = 400;
var point_width = 100;
var max_pos_mvt = 2;

//floor function for the fourth circle
var pos_x5 = 300;
var pos_y4 = 500;
var point_width = 100;
var max_pos_mvt = 2;

//floor function for the fifth Circle
var pos_x6 = 600;
var pos_y5 = 150;
var point_width = 100;
var max_pos_mvt = 2;

//Creating the Array
var circle = [100, 200, 300,400];

//creating the canvas
function setup(){
createCanvas(630,500)
pos_x2 = width * 0.5;
pos_y = height * 0.5;

background(col);

col = map(pos_x1, 630, 500);
col = map(pos_x1, 630, 500);

}

function draw(){


drawCircle();

drawline();

//new Circle 1st
push();
fill("pink");
ellipse(pos_x2, pos_y, point_width);
pos_x2 += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pos_y += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pop();

// Sencond Circle
push();
fill("yellow");
ellipse(pos_x3, pos_y2, point_width);
pos_x3 += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pos_y2 += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pop();

//Third Circle
push();
fill("blue");
ellipse(pos_x4, pos_y3, point_width);
pos_x4 += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pos_y3 += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pop();

//fourth Circle
push();
fill("green");
ellipse(pos_x5, pos_y4, point_width);
pos_x5 += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pos_y4 += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pop();

//fifth Circle
push();
fill("red");
ellipse(pos_x6, pos_y5, point_width);
pos_x6 += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pos_y5 += floor(random(-max_pos_mvt, max_pos_mvt + 0));
pop();

//making the array for circles
push();
for (var m =0; m < 6; m++) {
  stroke(255);
  fill("orange");
  ellipse(m * 320, 490, circle[m], circle[m]);

}
pop();



}
//Creating my own funtion for drawing a circle
function drawCircle() {
    fill( "white" );
    noStroke();
    ellipse( 450, 450, 450 );
}
//Creating my own funtion for drawing a line. This will give the circles a glow like appearance.
function drawline(){
stroke("purple");


}
