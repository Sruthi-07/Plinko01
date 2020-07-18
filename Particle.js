class Particle{
    constructor(x, y){
        var Options = {
            isStatic : false,
            restitution : 1,
            friction : 1,
            density : 0.6
        }
        this.radius = 15;
        this.body = Bodies.circle(x, y, this.radius, Options);
        this.color = color(random(0,225), random(0,225), random(0,225));

        World.add(world, this.body);
    }
 
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0, this.radius);
        pop();
    }
 }
