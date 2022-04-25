// console.log('pets.js');

let pets = [];
let petsArr48 = [];
let pet = {};
let pages = 0;
let currentPage = 1;

// FUNCS
const formPet = (pet) => {
  const card = `
<div class="friends__card">
<div class="friends__card__header">
<img src="${pet.img}" alt="${pet.name}" />
</div>
<div class="friends__card__body">
<h4 class="friends__card__title">${pet.name}</h4>
<button class="friends__card__button">Learn more</button>
</div>
</div>
`;
  return card;
};

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.4);
};

const setButtonsStatus = () => {
  if (currentPage === 1) {
    first.setAttribute('disabled', 'disabled');
    prev.setAttribute('disabled', 'disabled');
  } else {
    first.removeAttribute('disabled');
    prev.removeAttribute('disabled');
  }
  if (currentPage === pages) {
    next.setAttribute('disabled', 'disabled');
    last.setAttribute('disabled', 'disabled');
  } else {
    next.removeAttribute('disabled');
    last.removeAttribute('disabled');
  }
};

const setCards = (currentPage = 1, pages) => {
  setButtonsStatus();
  cardsBox.style.animation = 'none';
  const firstPetNum = (currentPage - 1) * (48 / pages);

  const lastPetNum = firstPetNum + 48 / pages;

  const petsOnPage = petsArr48.slice(
    firstPetNum,
    lastPetNum
  );

  cardsBox.innerHTML = '';
  petsOnPage.forEach((el) => {
    cardsBox.insertAdjacentHTML('beforeend', formPet(el));
    cardsBox.lastElementChild.addEventListener(
      'click',
      openPopUp
    );

  });
  switchNumber.textContent = currentPage;
  setTimeout(() => {
    cardsBox.style.animation = 'comeUp 1s';
  }, 20);
};

const setPagesAmount = () => {
  const winWidth = window.innerWidth;

  let __pages = 0;
  if (1280 <= winWidth) {
    __pages = 6;
  } else if (768 <= winWidth && winWidth <= 1279) {
    __pages = 8;
  } else __pages = 16;
  if (__pages !== pages) {
    pages = __pages;
    // redraw
    setCards(currentPage, pages);
  }
};

const slideFirst = () => {
  currentPage = 1
  setCards(currentPage, pages);
};

const slidePrev = () => {
  
  if (currentPage > 0) {
  
    currentPage -= 1;
    setCards(currentPage, pages);
  }
};

const slideNext = () => {
  if (currentPage < pages) {
    currentPage += 1;
    setCards(currentPage, pages);
  }
};

const slideLast = () => {
  currentPage = pages
  setCards(currentPage, pages);
};

// DOM

const switchNumber = document.querySelector(
  '.friends__switch--number'
);
const cardsBox = document.querySelector('.friends__cards');
const first = document.querySelector('#first');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const last = document.querySelector('#last');

fetch('../../assets/pets.json')
  .then((response) => response.json())
  .then((petsArr) => {
    pets = petsArr.slice();

    first.addEventListener('click', () => {
      slideFirst();
    });

    prev.addEventListener('click', () => {
      slidePrev();
    });

    next.addEventListener('click', () => {
      slideNext();
    });

    last.addEventListener('click', () => {
      slideLast();
    });

    //make all 48
    for (let index = 0; index < 6; index++) {
      petsArr48.push(...shuffle(pets));
    }

    setPagesAmount();
  });

window.addEventListener('resize', () => {
  setPagesAmount();
});
