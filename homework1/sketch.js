function setup() {
  createCanvas(600, 400);
  background(20, 25, 40);
  noLoop();
}

function draw() {
  stroke(255, 255, 255, 50);
  strokeWeight(1);
  line(0, 0, 600, 400);
  line(600, 0, 0, 400);
  line(300, 0, 300, 400);
  line(0, 200, 600, 200);
  line(150, 0, 150, 400);
  line(450, 0, 450, 400);

  noStroke();
  fill(255, 80, 80, 150);
  rect(50, 50, 120, 120);
  fill(255, 120, 120, 120);
  rect(80, 80, 120, 120);
  
  fill(80, 150, 255, 150);
  rect(430, 230, 120, 120);
  fill(120, 180, 255, 120);
  rect(400, 200, 120, 120);

  stroke(255, 200, 0, 150);
  strokeWeight(2);
  noFill();
  circle(300, 200, 350);
  circle(300, 200, 280);
  circle(300, 200, 210);
  
  noStroke();
  fill(255, 220, 50, 200);
  circle(300, 200, 100);
  fill(255, 255, 255, 230);
  circle(300, 200, 30);

  fill(0, 255, 150, 140);
  triangle(300, 20, 230, 130, 370, 130);
  fill(180, 100, 255, 140);
  triangle(300, 380, 230, 270, 370, 270);
  
  fill(255, 50, 150, 120);
  triangle(20, 200, 130, 140, 130, 260);
  fill(50, 200, 255, 120);
  triangle(580, 200, 470, 140, 470, 260);

  stroke(255);
  strokeWeight(1);
  line(200, 60, 400, 60);
  line(200, 340, 400, 340);
  line(60, 150, 60, 250);
  line(540, 150, 540, 250);

  noStroke();
  fill(255, 255, 0);
  circle(200, 60, 10);
  circle(400, 340, 10);
  circle(60, 250, 10);
  circle(540, 150, 10);
  
  fill(255, 255, 255, 40);
  rect(0, 195, 600, 10);
  rect(295, 0, 10, 400);

  stroke(255, 255, 255, 100);
  noFill();
  rect(10, 10, 580, 380);
  
  fill(255);
  noStroke();
  circle(300, 10, 6);
  circle(300, 390, 6);
  circle(10, 200, 6);
  circle(590, 200, 6);

  fill(255, 150, 0, 180);
  rect(285, 50, 30, 30);
  rect(285, 320, 30, 30);
}
