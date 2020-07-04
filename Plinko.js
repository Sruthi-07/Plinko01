class Plinko{
    constructor(x, y){
        var Options = {
            isStatic : true,
            restitution : 1,
            friction : 1
        }
        this.radius = 10;
        this.body = Bodies.circle(x, y, 10, Options);

        World.add(world, this.body);
    }
 
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
 }