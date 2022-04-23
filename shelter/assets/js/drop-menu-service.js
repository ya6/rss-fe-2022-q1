console.log('drop-menu-service.js');
// FUNCS
// toggler
const openCloseBurger = () => {
  // console.log('#openCloseBurger');
  /*menuToggler.checked === true
    ? MenuDrop.classList.add('show-dropdown')
    : MenuDrop.classList.remove('show-dropdown');
    */

    if (menuToggler.checked === true) {
      MenuDrop.classList.add('show-dropdown');
      blackout.classList.add('active');
      document.body.style.overflowY = "hidden";
    } else {
      MenuDrop.classList.remove('show-dropdown');
      blackout.classList.remove('active');
      document.body.style.overflowY = "visible"

    }
};

// DOM
const MenuDrop = document.querySelector('.header__menu');
const menuToggler = document.querySelector('#menu__toggle');
const anchors = document.querySelectorAll(
  '.header__menu__link__anchor'
);

const blackout = document.querySelector(
  '.pets__blackout'
);

// START
// set after reload
menuToggler.checked = false;

menuToggler.addEventListener('change', openCloseBurger);

// go and close after link
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
