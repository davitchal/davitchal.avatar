class Sun{
  constructor(xpos,ypos){
    this.xpos = xpos;
    this.ypos = ypos;

  }

  display(){
    push();
    fill(253, 218, 13)
    noStroke();
    ellipse(width*.75,width*.15 + (myMap),70);
    fill(225)
    ellipse(width*.2,width*-.5 + (myMap),35);
    pop();

    myMap = map (mouseX,0,width,0,200)
  }
}
