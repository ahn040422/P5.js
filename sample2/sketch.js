function setup() {
  createCanvas(400, 600);
  noLoop();
}

function draw() {
  background(240);

  stroke(0);
  strokeWeight(2);
  fill(200, 180, 150);
  rect(170, 380, 60, 50);
  
  fill(100, 149, 237);
  arc(200, 600, 320, 480, PI, TWO_PI);

  fill(255, 224, 189);
  ellipse(200, 260, 240, 320);

  fill(50);
  arc(200, 200, 250, 200, PI, TWO_PI); 
  rect(80, 200, 35, 120);
  rect(285, 200, 35, 120);

  fill(255);
  ellipse(165, 220, 30, 20);
  ellipse(235, 220, 30, 20);
  fill(0);
  circle(165, 220, 12);
  circle(235, 220, 12);

  fill(245, 200, 160);
  stroke(180, 140, 110);
  strokeWeight(2);
  ellipse(200, 290, 100, 120);  //저는 코가 아주 큽니다 ..

  noFill();
  stroke(200, 80, 80);
  strokeWeight(2);
  arc(200, 350, 50, 25, 0, PI);
}
