const greenDots = [document.querySelector('.dot3')];
greenDots.push(document.querySelector('.dot4'));
greenDots.push(document.querySelector('.dot7'));
greenDots.push(document.querySelector('.dot10'));

for (let index = 0; index < greenDots.length; index++) {
    let element = greenDots[index];
    element.classList.add('green-back');
}

let dotsText = ["Здесь сидела ворона", "Тут прятались смурфики", "Здесь мигают огоньки", "Стадион", "Тут плавал крокодил", "Здесь лежала ласка", "Тут шахматно", "Здесь будущее", "Тут можно не искать клад", "Здесь красиво"]

const allDots = document.querySelectorAll('.dot');

for (let i = 0; i < allDots.length; i++) {
    const newTextElement = document.createElement('p');
    newTextElement.classList.add('hidden');
    newTextElement.textContent = dotsText[i];
    allDots[i].insertAdjacentElement('beforeend', newTextElement);
}

const dotsContainer = document.querySelector('.dots');

dotsContainer.addEventListener('click', function (e) {
    let target;
    if (e.target.classList.contains('dot')) {
        target = e.target;
    } else if (e.target.parentElement.classList.contains('dot')){
        target = e.target.parentElement
    }
    target.lastElementChild.classList.toggle('hidden');
    target.lastElementChild.classList.toggle('dot__text');
    target.firstElementChild.classList.toggle('hidden');
    target.children.item(1).classList.toggle('stick__extendded')
    target.classList.toggle('dot-opacity');
    target.classList.toggle('dot__extended');
});