const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const elementsList = ingredients.map(element => {
  const navitemEl = document.createElement('li');
   navitemEl.classList.add('item');
   navitemEl.textContent = element;
  // console.log(navitemtEl);
  
  return navitemEl;

})

console.log(elementsList);

ingredientsEl.append(...elementsList);

