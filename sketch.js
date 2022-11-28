const formElement = document.getElementById('form');
const textElement = document.getElementById('input');
const buttonElement = document.getElementById('button');
let txt = '';
let font;
let vehicles = [];

formElement.addEventListener('submit', (e) => {
  console.log(textElement.value);
  txt = textElement.value;
  if (txt.length > 5) {
    txt = txt.slice(0, 5);
  }
  e.preventDefault();
  vehicles = [];
  setup();
});

function preload() {
  font = loadFont('Menlo-Regular.ttf');
}

function setup() {
  createCanvas(600, 300);
  background(51);
  textFont(font);

  let points = font.textToPoints(txt, 10, 200, 192);

  points.forEach((pt) => {
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  });
}

function draw() {
  background(51);
  for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];
    vehicle.behaviors();
    vehicle.update();
    vehicle.show();
  }
}
