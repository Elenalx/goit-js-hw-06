const countDecrement = document.querySelector('[data-action="decrement"]');
const countIncrement = document.querySelector('[data-action="increment"]');
const countValue = document.querySelector('#value');
const countCounter = document.querySelector('#counter');


let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  countValue.textContent = counterValue;
}

const increment = () => {
  counterValue += 1;
  countValue.textContent = counterValue;
};

countDecrement.addEventListener('click', decrement);
countIncrement.addEventListener('click', increment);

