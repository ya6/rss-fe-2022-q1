// responsive slider. pop-up,  for now extremely difficult)

const formPet = (pet) => {
  const card = `
  <div class="pets__slider__card">
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

// FUNCS

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.4);
};

const clearOpacity = () => {
  blocks[0].style.opacity = 1;
  blocks[1].style.opacity = 1;
  blocks[2].style.opacity = 1;
};

let trigPrev = 1;
const slidePrev = (petsArr) => {
  let __bl = blocks.shift();
  blocks.push(__bl);
  blocks[0].style.transform = 'translate(-100%,0)';
  blocks[1].style.transform = 'translate(0,0)';
  blocks[2].style.opacity = 0;
  blocks[2].style.transform = 'translate(100%,0)';
  trigPrev = 0;

  setTimeout(() => {
    add(pets);
    clearOpacity();
    trigPrev = 1;
  }, 1000);
};
let trigNext = 1;
const slideNext = () => {
  let __bl = blocks.pop();
  blocks.unshift(__bl);

  blocks[0].style.opacity = 0;
  blocks[0].style.transform = 'translate(-100%,0)';
  blocks[1].style.transform = 'translate(0%,0)';
  blocks[2].style.transform = 'translate(100%,0)';
  trigNext = 0;

  setTimeout(() => {
    clearOpacity();
    add(pets);
    trigNext = 1;
  }, 1000);
};

const add = (petsArr) => {
  let current = [];
  for (let index = 0; index < 3; index++) {
    const _cur = blocks[1].children[index].textContent
      .trim()
      .split('\n')[0];
    current.push(_cur);
  }

  petsArr = petsArr.filter(
    (el) =>
      el.name != current[0] &&
      el.name != current[1] &&
      el.name != current[2]
  );

  let arr = [...petsArr];
  arr = shuffle(arr);

  blocks[0].innerHTML = '';
  arr.slice(0, 3).forEach((pet) => {
    blocks[0].insertAdjacentHTML('beforeend', formPet(pet));

    blocks[0].lastElementChild.addEventListener(
      'click',
      openPopUp
    );
  });
  blocks[2].innerHTML = '';
  arr.slice(2, 5).forEach((pet) => {
    blocks[2].insertAdjacentHTML('beforeend', formPet(pet));

    blocks[2].lastElementChild.addEventListener(
      'click',
      openPopUp
    );
  });
};

const set = (petsArr) => {
  petsArr = shuffle(petsArr);

  petsArr.slice(3, 6).forEach((pet) => {
    slidesBox1.insertAdjacentHTML(
      'beforeend',
      formPet(pet)
    );
    slidesBox1.lastElementChild.addEventListener(
      'click',
      openPopUp
    );
  });

  petsArr.slice(0, 3).forEach((pet) => {
    slidesBox2.insertAdjacentHTML(
      'beforeend',
      formPet(pet)
    );
    slidesBox2.lastElementChild.addEventListener(
      'click',
      openPopUp
    );
  });

  petsArr.slice(5, 8).forEach((pet) => {
    slidesBox3.insertAdjacentHTML(
      'beforeend',
      formPet(pet)
    );
    slidesBox3.lastElementChild.addEventListener(
      'click',
      openPopUp
    );
  });
};

// DOM

const cardsContainer = document.querySelector(
  '.pets__slider__cards'
);

const slidesBox1 = document.createElement('div');
slidesBox1.className = 'slider_way';
slidesBox1.style.transform = 'translate(-100%,0)';
cardsContainer.append(slidesBox1);

const slidesBox2 = document.createElement('div');
slidesBox2.className = 'slider_way';
cardsContainer.append(slidesBox2);

const slidesBox3 = document.createElement('div');
slidesBox3.className = 'slider_way';
slidesBox3.style.transform = 'translate(100%,0)';
cardsContainer.append(slidesBox3);

const blocks = [slidesBox1, slidesBox2, slidesBox3];

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// START

//get pest and form sides
let pets = [];
fetch('../../assets/pets.json')
  .then((response) => response.json())
  .then((petsArr) => {
    prev.addEventListener('click', () => {
      if (trigPrev === 1) {
        slidePrev(petsArr);
      }
    });
    next.addEventListener('click', () => {
      if (trigNext === 1) {
        slideNext(petsArr);
      }
    });

    pets = petsArr.slice();
    pets = shuffle(pets);

    set(pets);
  });
