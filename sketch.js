var h , m, s;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  // time  in hh:mm:ss format
  h = hour();
  m = minute();
  s = second();

  //converting h from 0-24 to 0-12
 // if(h>12)h=h-12;
 h = h%12

  //converting to degrees.
  hr = map(h,0,12,0,360);
  min = map(m,0,60,0,360);
  sec = map(s,0,60,0,360);

  //display text time 
  textSize(24)
  text(h+" : " + m+ " : "+ s, width/2,height/2)

  //display arcs arc(x,y,w,h,starting angle,ending angle)
  //starting angle 0 goes in the xpositive direction
  //hence -90 is used to start from the needle being upright
  //ending angle is counted in clockwise direction 
  translate(200,200)
  angleMode(DEGREES);
  noFill();
  rotate(-90)
  strokeWeight(5)

  stroke("yellow")  
  arc(0,0, 100,100,0,hr);

  stroke("blue")
  arc(0,0, 120,120,0,min);

  stroke("red")
  arc(0,0, 140,140,0,sec);
 
  //drawing lines from center
  push()
  rotate(sec)
  stroke("red") 
  line(0,0,40,0 )
  pop() 


  push()
  rotate(min)
  stroke("blue") 
  line(0,0,30,0 )
  pop() 


  push()
  rotate(hr)
  stroke("yellow") 
  line(0,0,20,0 )
  pop() 
  
  

}