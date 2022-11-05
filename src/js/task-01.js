// Кількість категорій
const navElement = document.querySelectorAll('li.item');
console.log(`Number of categories: ${navElement.length}`);

//  Текст h2 та кільіксть елементів
navElement.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);
});