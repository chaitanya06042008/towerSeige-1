const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload(){

}
function setup(){
    createCanvas(1600, 800);
    engine = Engine.create();
    world = engine.world;


    Engine.run(engine);
ground1 = new Ground(800, 600, 1600, 20)
base2 = new Ground(600, 473, 400, 20)
base1 = new Ground(1160, 300, 400, 20)
block1 = new BoxClass(460, 429, 50, 50)
block2 = new BoxClass(510, 429, 50, 50)
block3 = new BoxClass(560, 429, 50, 50)
block4 = new BoxClass(610, 429, 50, 50)
block5 = new BoxClass(507, 360, 50, 50)
block6 = new BoxClass(557, 360, 50, 50)
block7 = new BoxClass(607, 360, 50, 50)
block8 = new BoxClass(657, 429, 50, 50)
block9 = new BoxClass(662, 360, 50, 50)
block10 = new BoxClass(710, 429, 50, 50)
block11 = new BoxClass(556, 328, 50, 50)
block12 = new BoxClass(606, 328, 50, 50)
block13 = new BoxClass(580, 276, 50, 50)
block14 = new BoxClass(1000, 272, 50, 50)
block15 = new BoxClass(1040, 272, 50, 50)
block16 = new BoxClass(1080, 272, 50, 50)
block18 = new BoxClass(1160, 272, 50, 50)
block19 = new BoxClass(1200, 272, 50, 50)
block20 = new BoxClass(1240, 272, 50, 50)
block21 = new BoxClass(1040, 272, 50, 50)
block22 = new BoxClass(1080, 272, 50, 50)
block23 = new BoxClass(1120, 272, 50, 50)
block24 = new BoxClass(1160, 272, 50, 50)
block25 = new BoxClass(1120, 272, 50, 50)
block26 = new BoxClass(1200, 272, 50, 50)
block27 = new BoxClass(1120, 272, 50, 50)
block28 = new BoxClass(1080, 272, 50, 50)
block29 = new BoxClass(1160, 272, 50, 50)
block30 = new BoxClass(1120, 119, 50, 50)
polygon = new Polygon(400, 400, 40, 3)
slingshot = new Slingshot(polygon.body,{x:200,y:50},10,0.04);

}

function draw(){
    background(0)
    text((mouseX), 800, 400)
    text((mouseY), 800, 380)
ground1.display()
base1.display();
base2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block14.display();
block11.display();
block12.display();
block13.display();
block15.display();
slingshot.display();
block16.display();


block18.display();
block19.display();
block15.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
block28.display();
block29.display();
block30.display();
polygon.display()
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}
    function keyPressed(){
        if(keyCode===32){
            slingshot.attach(polygon.body)
        }
    }
    



   
