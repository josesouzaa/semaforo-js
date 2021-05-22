const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let IntervalID = null;

function trafficLight(event) {
  stopAutomatic();
  turnOn[event.target.id]();
};

function nextIndex() {
  colorIndex = colorIndex < 2 ? ++colorIndex : 0;
};

function changecolor() {
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

function stopAutomatic() {
  clearInterval(IntervalID);
}

const turnOn = {
  red() {
    img.src = "./img/vermelho.png"
  },
  yellow() {
    img.src = "./img/amarelo.png"
  },
  green() {
    img.src = "./img/verde.png"
  },
  automatic() {
    IntervalID = setInterval(changecolor, 1000)
  },
};

buttons.addEventListener('click', trafficLight);