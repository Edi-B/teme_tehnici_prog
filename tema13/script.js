const boardSize = 8;
const cellSize = 80;
let pieces = [];

class Piesa {
  constructor(x, y, culoare) {
    this.x = x;
    this.y = y;
    this.culoare = culoare;
  }

  afiseaza() {
    const cx = this.x * cellSize + cellSize / 2;
    const cy = this.y * cellSize + cellSize / 2;
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(this.culoare === 'alb' ? 255 : 30);
    text(this.culoare === 'alb' ? '🙂' : '😃', cx, cy);
  }
}

function setup() {
  createCanvas(boardSize * cellSize, boardSize * cellSize);
  textFont('Arial');

  // Inițializare piese negre (rândurile 0–2)
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < boardSize; x++) {
      if ((x + y) % 2 === 1) {
        pieces.push(new Piesa(x, y, 'negru'));
      }
    }
  }

  // Inițializare piese albe (rândurile 5–7)
  for (let y = 5; y < 8; y++) {
    for (let x = 0; x < boardSize; x++) {
      if ((x + y) % 2 === 1) {
        pieces.push(new Piesa(x, y, 'alb'));
      }
    }
  }
}

function draw() {
  background(255);

  // Desenează tabla
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      if ((x + y) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }

  // Desenează piesele
  for (let piesa of pieces) {
    piesa.afiseaza();
  }
}