const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stoone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
  
    rubber = new Rubber(700,40,130)
    ston = new stone(600,300,100,70)
     iroon = new iron(500,60,80,80)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
 rubber.display();
    ston.dis();
    iroon.doos();
}