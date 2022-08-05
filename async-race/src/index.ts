import './assets/style.css';
import AppController from './app/controllers/AppController';
import Dispatcher from './app/Dispatcher';
// console.log(Math.trunc((window.innerHeight - 100) / 7));
// import carComponent from './app/components/carComponent';
// import View from './app/View';
// import CarController from './app/controllers/CarController';

document.body.addEventListener('click', Dispatcher.clickHandler);
AppController.index();

// CarController.index(document.body, {
//   name: 'tesla',
//   color: 'red',
//   id: 1,
// });
