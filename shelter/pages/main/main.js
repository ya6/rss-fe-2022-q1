
console.log('ok');
// FUNCS
// toggler
const openCloseBurger = () => {
  console.log('#openCloseBurger');
  menuToggler.checked === true
    ? MenuDrop.classList.add('show-dropdown')
    : MenuDrop.classList.remove('show-dropdown');
};

// DOM
const MenuDrop = document.querySelector('.header__menu');

const menuToggler = document.querySelector(
  '#menu__toggle'
);
const anchors = document.querySelectorAll('.header__menu__link__anchor');

// START
// check for reload
menuToggler.checked = false;

menuToggler.addEventListener('change', openCloseBurger);

// close after link
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    menuToggler.checked = false;
    openCloseBurger();
  });
}