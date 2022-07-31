import './assets/style.css';
import AppController from './app/controllers/AppController';
import Dispatcher from './app/Dispatcher';

// events
document.body.addEventListener('click', Dispatcher.clickHandler);

AppController.index();
