let estructura;

function setup() {
  createCanvas(1200, 600);
  estructura= new Aventura();
}

function draw() {
  estructura.dibujar();
}

function mousePressed() {
  estructura.PasardeEstado();
}

function mouseClicked() {
  estructura.Abrirpuerta();
}

function keyPressed() {
  estructura.Condiciontexto();
}
