const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;

var plinkos = [];
var dividers = [];
var particles = [];

var dividerHeight = 300;

function setup() {
  createCanvas(620,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-5, width, 10);

  for (var i = 10; i <= width; i = i + 100){
    dividers.push(new Divider(i, 440, 10, dividerHeight));
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 100));
  }

  for (var j = 10; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 150));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 200));
  }
  for (var j = 10; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 250));
  }
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  for(var i = 0; i < dividers.length; i++){
    dividers[i].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/150, width/2+150), 10));
  }
  
  for(var k = 0; k < particles.length; k++){
    particles[k]. display ()
  }

  //particles.display();
}
