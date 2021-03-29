class stone{
    constructor(x,y,width,height){
     var options = {
         'restitution':0.8,
         'friction':0.9,
         'density':12
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
    this.w = width;
    this.h = height;
    World.add(world, this.body);
    }
    dis(){
        var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("red");
    rect(0, 0, this.w, this.h);
    pop();
  }
    























}
