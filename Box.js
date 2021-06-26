//

class Box {

  

  constructor(x, y, h,a) {
    this.x = x;
    this.y = y;
    this.hue = h;
		this.i=1.5*a

  }

display() {
      
      
      stroke(this.hue,100);
			strokeWeight(1);
      noFill();
      beginShape();
      vertex(this.x-this.i, this.y-this.i);
      vertex(this.x+400+this.i, this.y-this.i);
      vertex(this.x+400+this.i, this.y+400+this.i);
      vertex(this.x-this.i, this.y+400+this.i);
      vertex(this.x-this.i, this.y-this.i);
      endShape();
      
      
  
  
    
  }
  
update (){
     this.hue--;
     if (this.hue<=0) {
       this.hue =255;
     }
   }
}


