import './assets/style.css';
import Dispatcher from './Dispatcher';
import Dom from './Dom';
import app from './components/app';
import garage from './components/garage';
import Router from './Router';

// events
document.body.addEventListener('click', Dispatcher.clickDispatcher);

// set app
Dom.appendElemToDOM(document.body, app);

Router.route(garage);
