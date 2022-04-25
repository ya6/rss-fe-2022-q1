// PopUp

//has a shake eff(

    // const disableScrolling = () => {

    //   window.addEventListener('scroll', function (e) {
    //     window.scrollTo(0, 0);
    //   });
    // };
    
    // const enableScrolling = () => {
    //   window.onscroll = function () {};
    // };



const openPopUp = (e) => {
    const petsName = e.currentTarget.textContent
      .trim()
      .split('\n')[0];
    const petsIndex = pets.findIndex(
      (el) => el.name == petsName
    );
    petsPopup.classList.add('active');
    petsBlackout.classList.add('active');
    document.body.classList.add('prevent-scroll');

    if (headerPosition1 !== null) {
      headerPosition1.style.position = 'static';
      main1.style.marginTop = '5px';
    }
  
    fillPopup(petsIndex);
  };
  
  const fillPopup = (index) => {
    popupImg.src = pets[index].img;
    popupImg.alt = pets[index].name;
  
    popupName.textContent = pets[index].name;
    popupType.textContent = `${pets[index].type} - ${pets[index].breed}`;
    popupDescription.textContent = pets[index].description;
  
    age.textContent = pets[index].age;
    inoculations.textContent =
      pets[index].inoculations.join(', ');
    diseases.textContent = pets[index].diseases.join(', ');
    parasites.textContent = pets[index].parasites.join(', ');
  };
  
  const closePopup = () => {
    petsPopup.classList.remove('active');
    petsBlackout.classList.remove('active');
    document.body.classList.remove('prevent-scroll');
    if (headerPosition1 !== null) {
      headerPosition1.style.position = 'fixed';
      main1.style.marginTop = '120px';
    }
  };


  // PopUp

// DOM

const headerPosition1 =
  document.querySelector('.header--position') || null;
 const main1 = document.querySelector('.main');


const petsPopup = document.querySelector('.pets__popup');
const petsClose = document.querySelector('.pets__close');
const petsBlackout = document.querySelector(
  '.pets__blackout'
);

const popupImg = document.querySelector(
  '.pets__popup__img img'
);
const popupName = document.querySelector(
  '.pets__popup__name'
);
const popupType = document.querySelector(
  '.pets__popup__type'
);
const popupDescription = document.querySelector(
  '.pets__popup__description'
);

// EVENTS
petsBlackout.addEventListener('click', closePopup);

petsClose.addEventListener('click', closePopup);
