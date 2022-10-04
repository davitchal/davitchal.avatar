let mic;

let count=0;
let myMap=0;
let angle=0;
let eyeChange = false;

let cloudOne;
let cloudTwo;
let cloudThree;
let sun;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  textAlign(CENTER);
  //mic = new p5.AudioIn();
  //mic.start();

  cloudOne = new Cloud(1.5,70,50,.5);
  cloudTwo = new Cloud(.5,20,50,.8);
  cloudThree = new Cloud(.75,375,50,.6);
  sun = new Sun();
}

function draw() {
  background(135-mouseX, 206, 235+mouseX);
  background(135-mouseX,206-mouseX,235-mouseX/4);
  sun.display();
  cloudOne.display();
  cloudOne.move();
  cloudTwo.display();
  cloudTwo.move();
  cloudThree.display();
  cloudThree.move();
  grass();
  faceRect(200);
  eyes();
  ears();
  rightTri();
  mouth();
  airpods();
  angle = angle + 1 ;
}

function mousePressed(){
    if (mouseX > width * 0.2 && mouseX< width* 0.8 && mouseY > width * 0.2 && mouseY< width* 0.8)
    {
      eyeChange = !eyeChange
    }
}


function faceRect(color){
  noStroke();
  fill(color);
  rect(width*.2,width*.2, width*.3, width*.3);
  rect(width*.2,width*.5, width*.3, width*.3);
  rect(width*.5,width*.5, width*.3, width*.3);
}

function eyes(){
  fill(250);
  circle(width*.4,width*.5,width*.1);
  circle(width*.6,width*.5,width*.1);
  if (eyeChange){
    fill(50);
  }
  else {
    fill(111, 78, 55)
  }
  circle(width*.4,width*.5,width*.04);
  circle(width*.6,width*.5,width*.04);
}
function ears(){
  fill(200);
  circle(width*.2,width*.5,width*.2);
  circle(width*.8,width*.5,width*.2);
  fill(190);
}

function rightTri(){
  fill(230);
  triangle(width*.5,width*.5,width*.5,width*.2,width*.8,width*.5);
}

function mouth(){

  fill(250);
  ellipse(width*.5,width*.65, width*.2,width*.06);
}

function grass(){
  push();
  fill(0,128,0)
  translate(0,150);
  ellipse(width*.5,width*.5, width*2, width*.7);
  pop();
}

function airpods(){
  push();
  translate(width*.17,width*.5);
  rotate(60);
  ellipse(0,0,width*.05,width*.07);
  rect(0,0,width*.07,width*.02)
  pop();

  push();
  translate(width*.85,width*.5);
  rotate(130);
  ellipse(0,0,width*.05,width*.07);
  rect(0,0,width*.07,width*-.02)
  pop();
}
