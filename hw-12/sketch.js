var orbs = [];
const numOfOrbs = 10;

function setup() {
    createCanvas( 600, 400 );
    var x = 50;
    var y = 50;
    for ( var i = 0; i < numOfOrbs; i++ ) {
    orbs.push( new ball( x, y ) );
      }
}

function draw(){
  background('pink');
for( var  i = 0; i < orbs.length; i++) {
  orbs[i].move();
  orbs[i].edgeCheck();
  orbs[i].display();
  }
}


class ball {
  constructor(x,y,size) {
    this.color = 'white';
       this.size = random(10, 60);
       this.r = this.size / 2;
       this.Xx = x;
       this.Yy = y;
       this.Xxx = random(-50, 50);
       this.Yyy = random(-10, 10);
     }


    display() {
        push();
        noStroke();
        fill(this.color);
        translate(this.Xx, this.Yy);
        ellipse(15, 10, this.size);
        pop();
    }

      edgeCheck() {

            if (this.Xx + this.r >= random || this.Xx - this.rad <= 0) {
               }
            if (this.Yy + this.r >= random || this.Yy - this.rad <= 0) {
             }
           }

         move() {
            this.Xx += this.Xxx;
            this.Yy += this.Yyy;
             }

           }
