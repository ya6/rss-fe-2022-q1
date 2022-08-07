import './assets/style.css';
import AppController from './app/controllers/AppController';
import Dispatcher from './app/Dispatcher';

document.body.addEventListener('click', Dispatcher.clickHandler);
AppController.index();

// CarController.index(document.body, {
//   name: 'tesla',
//   color: 'red',
//   id: 1,
// });
