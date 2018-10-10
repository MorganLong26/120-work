

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;


var pos_x1 = 100;
var col = 0;
var b = 0;
var g = 255;

function setup() {
    createCanvas(windowWidth, 400);
    background("pink");
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(col);
    ellipse(pos_x1, ball.x, ball.y, ball.width, ball.width);
    col = pos_x1/2;
    //position of rectangle
    pos_x1 = pos_x1 + 5;
    //Goes across canvas
    pos_x1 = pos_x1 % width;

}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
