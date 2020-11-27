//Use mouse to "erase" and make visible the paintings of Nadir afonso

let images = ["images/guaches-nadir-cortado-1.jpg",
"images/guaches-nadir-cortado-39L.jpg",
"images/guaches-nadir-cortado-581.jpg",
"images/guaches-nadir-cortado-1660.jpg",
"images/guaches-nadir-cortado-1773.jpg",
]
let canvas;
var canvasX = window.innerWidth;
var canvasY = window.innerHeight;
var erasing;
var eraserSize = 100;

function setup(){
  var img = createImg(images[0]);
  img.style("max-height", "700px");
  noStroke();
  canvas = createCanvas(canvasX, canvasY);
  canvas.position(0, 0);
  fill(255,255,255,255);
  rect(0,0,1250,850);
}

function draw(){
  erasing = true;
  var eraser = color(255,255,255,255);
  erase();
  noStroke();
  fill(eraser);
  //move mouse to reveal:
  ellipse(mouseX, mouseY, eraserSize, eraserSize);
  noErase();
}
