Morgan Long Creative Coding 1

[Live Sketch Link](https://morganlong26.github.io/120-work/HW-7/)

  
# Description of what the original code is doing

1. **let ball= {};**
  This line of code is defining the variable ball, and it is located outside of function set up because it is global.
2. **ball.width = 40;**
This line of code is defining the variable size of the ball.
3. **ball.x = 10;**
This code is telling the starting position for the grid for the x value.
4. **ball.y = 10;**
This code is telling the starting position for the grid for the y value.
5. **ball.delta_x = 1;**
This line tells the angle at which the ball will move on the x value.
6. **ball.delta_y = 1;**
This line tells the angle at which the ball will move on the y value.
7. **ball.scale_x = 1;**
This line of code tells how fast the movement will be for the x value.
8. **ball.scale_y = 1;**
This line of code tells how fast the movement will be for the y value.
9. **function setup() {
    createCanvas(windowWidth, 400);
    background(255);**
The function setup is defining the setup function needed for any project. CreateCanvas is telling the program that you are essentially creating the backdrop for the whole project. In this case the canvas is windowwidth and 400 pixels tall. The background is in charge of the color and in this instance it is white.
10. **function draw() {**
  This line of code it the meat of the project. This is where your image will be created. In this instance this is where the ball is created the actual image not just the coordinates of where it will travel on the grid.
11. **ball.x += ball.delta_x * ball.scale_x;**
This is the equation stating that the ball positioned on the x value is equal or greater to the angle position times the speed of the variable x.
12. **ball.y += ball.delta_y * ball.scale_y;**
This is the equation stating that the ball positioned on the y value is equal or greater to the angle position times the speed of the variable y.
13. **if (ball.x >= width || ball.x <= 0)**
This is a conditional statement which means it tells the variable x that is has restrictions on where it can go. In this instance the ball can go the width but it is restricted on the horizontal axis, so it has to bounce off.
14. **ball.delta_x = -1 * ball.delta_x;**
This equation goes along with the conditional statement, but this deals with the angle in which the ball will go off once it hits its restriction point on the horizontal axis.
15. **if (ball.y >= height || ball.y <= 0)**
This is a conditional statement which means it tells the variable y that is has restrictions on where it can go. In this instance the ball can go the height but it is restricted on the vertical axis, so it has to bounce off.
16. **ball.delta_y = -1 * ball.delta_y;**
This equation also goes along with the conditional statement, but this deals with the angle in which the ball will go off once it hits its restriction point on the vertical axis.
17. **fill(255);**
This line of code is telling what the color of the circle or ball will be. In this case it is white.
18. **ellipse(ball.x, ball.y, ball.width, ball.width);**
This is saying that the ball or circles dimensions will be the same as the ones in the variables stated outside of the set up and draw functions.
19. **function mousePressed() {**
This is another function being implemented that will let the user click on the screen using their mouse to change something about the image.
20. **ball.scale_x = map(mouseX, 0, width, 0.5, 10);**
This goes along with the function mousePressed. This is saying that if you click along the x axis or width it will change the speed of the circle and angle of the circle.
21. **ball.scale_y = map(mouseY, 0, height, 0.5, 10);**
This also goes along with the function mousePressed. This is saying that if you click along the y axis or height it will change the speed of the circle and angle of the circle.

## How the ball moves
The ball moves back and forth because it has a conditional statement applied to it. When it hits a certain point on the horizontal and vertical axis it will bounce off in another direction and angle. Also, this code has a mousePressed function and this will change the movement of the ball as well. Depending on where the user clicks their mouse on the x and y axis the ball will bounce of in another angle in an opposite direction.


## How did you alter the sketch?
First I changed the background color to pink because I have been liking that color lately. Then I wanted to have the ball continuously change color in a gradient way from white to black. To achieve this I had to establish new variables and map the position and the color so it would start black and go white, like a gradient. Then I had to implement the new variables into the drawing function. I began by getting rid of the original ellipse information. I set the fill to the variable (col). Then I changed the ellipse information to match the new variables created. I wanted to keep the conditional statement because I liked the look. You do have to wait a little to have the ball bounce back up if you clicked in a certain spot since the scaling was changed.
