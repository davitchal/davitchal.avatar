class Cloud{
  constructor(size,xpos,ypos,speed){
    this.size = size;
    this.xpos = xpos;
    this.ypos = ypos;
    this.speed = speed;

  }

  display(){
    push();
    fill(250)
    noStroke();
    scale(this.size);
    ellipse(this.xpos, this.ypos, 70, 50);
    ellipse(this.xpos + 10, this.ypos + 10, 70, 50);
    ellipse(this.xpos - 20, this.ypos + 10, 70, 50);
    pop();
  }

  move(){
    this.xpos+= this.speed;
    if(this.xpos >= 500 / this.size){
      this.xpos = -50;
    }
  }
}
