function setup() {
  createCanvas(1380,700);
  angleMode(DEGREES);
}

function draw() { 
  background(0);
  translate(640,360);
  rotate(-90);
  let hr= hour();
  let mn= minute();
  let sc= second();


  strokeWeight(8);   
  noFill();
  
  //seconds
  stroke(255,115,120);
  let end1= map(sc, 0, 60, 0, 360 );
  arc(0,0,350,350,0, end1);
  push();
  rotate(end1);
  line(0,0,100,0);
  pop();  
  
  //minutes
  stroke(25,100,110);
  let end2= map(mn, 0, 60, 0, 360 );
  arc(0,0,330,330,0, end2);
  push();
  rotate(end2);
  line(0,0,75,0);
  pop();  
  
  //hours
  stroke(150,225,100);
  let end3= map(hr%12, 0, 12, 0, 360 );
  arc(0,0,310,310,0, end3);
  push();
  rotate(end3);
  line(0,0,50,0);
  pop();  

  stroke(255);
  point(0,0);

}

