var mySound;
var r,g,b;
var x = 25;
var y = 25;

function preload(){
 mySound = loadSound('js/beautiful.mp3');   
}

function setup(){
 createCanvas(800,800);  
 background(255);
 mySound.setVolume(0.1);
 r = random(0,255);
 g = random(0,255);
 b = random(0,255);
}

function draw(){
  fill(r,g,b);
    star(x,y,50,26,10)
    colorswitch();
    other();
}





function mouseClicked(){
  if(mySound.isPlaying()){
   mySound.pause();
   
  }
  else{
   mySound.play();
  
  }
}

//function mouseReleased(){
//  mySound.pause()
//}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function colorswitch(){
 if(x = random(width)){
  r = random(0,255);
 g = random(0,255);
 b = random(0,255);
 fill(r,g,b); 
}
}

function other(){
 if(y = random(height)){
  r = random(0,255);
 g = random(0,255);
 b = random(0,255);
  fill(r,g,b);
 }
}