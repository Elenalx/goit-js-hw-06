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
const createBoxes = (amount) => {
  amount = refs.input.value;
  for (let i = 0; i < amount; i += 1){
    const newDiv = document.createElement('div');
    if (i = 1) {
    newDiv.style.width = `${width +=amount * step}px`;
    newDiv.style.height = `${height += amount * step}px`;
    } else if (i = 0) {
          newDiv.style.width = `${width -=amount * step}px`;
    newDiv.style.height = `${height -= amount * step}px`;
    }
    newDiv.style.backgroundColor = getRandomHexColor();
    const groupEl = refs.div.append(newDiv);
  return groupEl;
  }
};

const destroyBoxes = (groupEl = '') => {
  refs.div.innerHTML = groupEl;
};

