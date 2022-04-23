// console.log('drop-menu-service.js');

// FUNCS

//have a shake eff(
const disableScrolling = () => {
  document.body.style.overflowY = '-1';
  window.addEventListener('scroll', function (e) {
    window.scrollTo(0, 0);
  });
};

const enableScrolling = () => {
  window.onscroll = function () {};
};

// toggler
const openCloseBurger = () => {
  if (menuToggler.checked === true) {
    MenuDrop.classList.add('show-dropdown');
    blackout.classList.add('active');
    document.body.classList.add('prevent-scroll');
    // disableScrolling();

    //trick for rets page fixed header)
    if (headerPosition !== null) {
      headerPosition.style.position = 'static';
      main.style.marginTop = '5px';
    }
  } else {
    MenuDrop.classList.remove('show-dropdown');
    blackout.classList.remove('active');
    document.body.classList.remove('prevent-scroll');
    // enableScrolling();

    if (headerPosition !== null) {
      headerPosition.style.position = 'fixed';
      main.style.marginTop = '120px';
    }
  }
};

const closeBurger = () => {
  menuToggler.checked = false;
  openCloseBurger();
};

// DOM
const MenuDrop = document.querySelector('.header__menu');
const menuToggler = document.querySelector('#menu__toggle');
const anchors = document.querySelectorAll(
  '.header__menu__link__anchor'
);
const blackout = document.querySelector('.pets__blackout');
const headerPosition =
  document.querySelector('.header--position') || null;
const main = document.querySelector('.main');

// START
// close menu after reload
menuToggler.checked = false;

menuToggler.addEventListener('change', openCloseBurger);
blackout.addEventListener('click', closeBurger);

// go and close after link
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    closeBurger();

    const blockID = anchor.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
