const body = document.querySelector('body');
const changeColor = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColor.addEventListener('click', onClicChangeColor);

 function onClicChangeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorEL.textContent = body.style.backgroundColor;
}


