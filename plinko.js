class Plinko{
    constructor(x, y, radius) {
        var options = {
            isStatic : true,
            'restitution':0.8
            
        }
        this.body = Bodies.rectangle(x, y, 10, options);
        this.radius = 10;
       
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("WHITE")
        ellispseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}