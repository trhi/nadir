//Use mouse to "erase" and make visible the painting of Nadir afonso
//Add audio cues: when the mouse is dragged over certain spots,
//audio is triggered
//


let img;
let canvas;
var erasing;
//var eraserColor = color(255,255,255,127);
var eraserSize = 60;

function preload(){
 //img = loadImage('images/guaches-nadir-cortado-1.jpg');


}

function setup(){

  img = createImg("images/guaches-nadir-cortado-1.jpg");

  img.position(0, 0);
  img.size(1250, 850);

  canvas = createCanvas(1250, 850);
  canvas.position(0, 0);


  //background(153);
  //image(img, 0, 0);
  fill(255,255,255,255);
  rect(0,0,1250,850);
}



function draw(){
  //background(img);

  //fill(0,0,0,0);
  //ellipse(mouseX, mouseY, 40,40);
}

function mousePressed(){
  erasing = true;
  //fill("black");
  //text("pressed", mouseX+5, mouseY+5);
  var eraser = color(255,255,255,100);
  //eraser.setAlpha(0);
  erase();
  noStroke();
  fill(eraser);
  ellipse(mouseX, mouseY, eraserSize, eraserSize);
  noErase();
  //keyPressed();
}

function mouseDragged() {
  //erasing = true;
  if (erasing) {
    //bx = mouseX - xOffset;
    //by = mouseY - yOffset;
  }

  //fill("black");
  //text("dragging", mouseX+5, mouseY+5);

  erase();
  var eraser = color(255,255,255,100);
  noStroke();
  fill(eraser);
  ellipse(mouseX, mouseY, eraserSize, eraserSize);
  noErase();
}

function mouseReleased() {
  erasing = false;
  //fill("black");
  //text("released",mouseX+5, mouseY+5);
}
