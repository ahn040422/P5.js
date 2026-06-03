let charX = 200;
let charY = 200;
let bgCol = 220;
let canSave = true;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(bgCol);
  
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) charX -= 3;
    if (keyCode === RIGHT_ARROW) charX += 3;
    if (keyCode === UP_ARROW) charY -= 3;
    if (keyCode === DOWN_ARROW) charY += 3;
    
    if ((key === 's' || key === 'S') && canSave === true) {
      saveGif('assignment3.gif', 3);
      canSave = false;
    }
  } else {
    canSave = true;
  }

  if (mouseIsPressed) {
    bgCol = color(random(255), random(255), random(255));
  }

  push();
  translate(charX - 200, charY - 200); 

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
  let mx = map(mouseX, 0, width, -5, 5);
  let my = map(mouseY, 0, height, -3, 3);
  circle(165 + mx, 220 + my, 12);
  circle(235 + mx, 220 + my, 12);

  fill(245, 200, 160);
  stroke(180, 140, 110);
  strokeWeight(2);
  ellipse(200, 290, 100, 120);  //저는 코가 아주 큽니다 ..

  noFill();
  stroke(200, 80, 80);
  strokeWeight(2);
  if (mouseIsPressed) {
    arc(200, 350, 60, 40, 0, PI);
  } else {
    arc(200, 350, 50, 25, 0, PI);
  }
  pop();
  
  noStroke();
  fill(0);
  text("방향키: 이동 / 마우스 클릭: 배경색 변경&크게 웃기 / 마우스 이동: 시선 처리 / S키: GIF저장", 10, 20);
}
