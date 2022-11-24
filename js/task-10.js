function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  div: document.querySelector('#boxes'),
  input: document.querySelector('[type=number]'),
  increment: document.querySelector('[data-create]'),
  decrement: document.querySelector('[data-destroy]'),
};

let step = 10;
let width = 30;
let height = 30;

button.addEventListener("click", createBoxes);

function createBoxes (value) => {
  for (let i = 0; i < input.value; i += 1){
    const newDiv = document.createElement('div');
      newDiv.style.width = `${width += i * step}px`;
      newDiv.style.height = `${height += i * step}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
    const groupEl = refs.div.append(newDiv);
  return groupEl;
  }
};

const destroyBoxes = (groupEl = '') => {
  refs.div.innerHTML = groupEl;
};

