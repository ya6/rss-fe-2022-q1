console.log('main.js');

// FUNCS
const formPet = (pet) => {
  const card = `<div class="pets__slider__card">
  <div class="pets__card__header">
      <img src="${pet.img}" alt="${pet.name}" />
  </div>
  <div class="pets__card__body">
      <h4 class="pets__card__title">${pet.name}</h4>
      <button class="pets__card__button">Learn more</button>
  </div>
  </div>
  `;
  return card;
};

// DOM
const cardsContainer = document.querySelector(
  '.pets__slider__cards-1'
);

// START
let pets = null;
fetch('../../assets/pets.json')
  .then((response) => response.json())
  .then((petsArr) => {
    console.log(petsArr);

    pets = petsArr.slice(0, 3);
    console.log(pets);

    pets.forEach((pet) => {
      cardsContainer.insertAdjacentHTML(
        'beforeend',
        formPet(pet)
      );
    });
  });
