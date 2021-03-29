class iron {                                                               
    

    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':3,
            'density':30
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
       this.w = width;
       this.h = height;
       World.add(world, this.body);
       }
       doos(){
           var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       rectMode(CENTER);
       strokeWeight(4);
       stroke("black");
       fill("black");
       rect(0, 0, this.w, this.h);
       pop();
    }
}