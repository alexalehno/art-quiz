import scss from './styles/index.scss';
import html from './index.html';

import Main from './views/pages/Main.js';
import Settings from './views/pages/Settings.js';
import Categories from './views/pages/Categories.js';
import QuestionArtist from './views/pages/Question-artist.js';
import QuestionPictures from './views/pages/Question-pictures.js';
import Error404 from './views/pages/Error404.js';
import Score from './views/pages/Score.js';

import Utils from './services/Utils.js';

const routes = {
  '/': Main,
  '/settings': Settings,

  '/categories_artist': Categories,
  '/categories_pictures': Categories,

  '/categories_artist/category': QuestionArtist,
  '/categories_pictures/category': QuestionPictures,

  '/score': Score,
};


function router() {
  const app = null || document.querySelector('.app');

  let request = Utils.parseRequestURL();

  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.category ? '/category' : '');

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  app.innerHTML = page.render(request);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
 