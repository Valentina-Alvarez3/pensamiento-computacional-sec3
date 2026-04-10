function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(245);

  // Circulo negro
  fill(10);
  ellipse(-20, 60, 170, 170);
  
  // Cuadrado rojo
  fill(190, 40, 40);
  rect(252, 12, 135, 135);
  
  // Cuadrado negro
  fill(15);
  rect(252, 157, 135, 135);

  // Rectangulo amarillo
  translate(100, 260);
  rotate(-8.9);
  fill(230, 200, 0);
  rect(-32, -97, 65, 195);
  rotate(8.9);
  translate(-100, -260);

  // Rectangulo negro grande inclinado
  translate(150, 295);
  rotate(-8.9);
  fill(10, 50, 60);
  rect(-22, -60, 45, 120);
  rotate(8.9);
  translate(-150, -295);

  // Rectangulo rojo pequeño
  translate(195, 310);
  rotate(-8.9);
  fill(180, 50, 60);
  rect(-17, -55, 35, 110);
  rotate(8.9);
  translate(-195, -310);

  // Rectangulo negro inclinado
  translate(100, 270);
  rotate(0.35);
  fill(30);
  rect(-95, -30, 190, 60);
  rotate(-0.35);
  translate(-100, -270);

  // Cuadrado azul pequeño
  translate(35, 163);
  rotate(-0.17);
  fill(40, 60, 180);
  rect(-25, -25, 50, 50);
  rotate(0.17);
  translate(-35, -163);

  // Rojo largo
  translate(220, 210);
  rotate(-0.21);
  fill(190, 40, 40);
  rect(-15, -180, 30, 360);
  rotate(0.21);
  translate(-220, -210);

  // Rojo horizontal
  translate(245, 230);
  rotate(0.17);
  fill(190, 40, 40);
  rect(-78, -9, 80, 20);
  rotate(-0.17);
  translate(-245, -230);

  // Líneas
  stroke(190, 40, 40);
  strokeWeight(3);

  line(110, 160, 125, 110);
  line(220, 0, 220, 400);
  line(100, 130, 240, 160);

  noStroke();
}
