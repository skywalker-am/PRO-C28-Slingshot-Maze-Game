class Ground {
    constructor(x,y,width,height,bgcolor) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.bgcolor = bgcolor;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.bgcolor);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
