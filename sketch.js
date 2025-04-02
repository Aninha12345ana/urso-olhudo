function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background ("#005304")
  fill("#B76703")
    circle(200, 200, 250);
  fill("black")
    circle(150, 150, 50);
    circle(250, 150, 50);
  fill("#692F04")
  circle(200, 200, 40);
  circle(100, 100, 60)
  circle(300, 100, 60)
  line (197,266,258,228)
  triangle (200, 250, 150,)
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita
  
  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 10); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 10); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
