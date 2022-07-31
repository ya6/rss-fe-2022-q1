import './assets/style.css';
import AppController from './app/controllers/AppController';
import Dispatcher from './app/Dispatcher';

document.body.addEventListener('click', Dispatcher.clickHandler);
AppController.index();
console.log(Math.trunc((window.innerHeight - 100) / 7));
