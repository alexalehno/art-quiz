import scss from './styles/index.scss';
import html from './index.html';
// ...............................................................................
import Main from './views/pages/Main';
import Settings from './views/pages/Settings';
import Categories from './views/pages/Categories';
import QuestionArtist from './views/pages/QuestionArtist';
import QuestionPictures from './views/pages/QuestionPictures';
import Error404 from './views/pages/Error404';
import Score from './views/pages/Score';
// ...............................................................................
import Utils from './services/Utils';

import GameM from './services/GameM';
import GameView from './services/GameView';
import GameC from './services/GameC';
import QuestionM from './services/QuestionM';
import QuestionView from './services/QuestionView';
import QuestionC from './services/QuestionC';
// ...............................................................................
import LocalStorage from './services/LocalStorage';
import { storage } from './services/funcs';
// ...............................................................................
// ...............................................................................

const routes = {
  '/': Main,
  '/settings': Settings,
  '/categories_artist': Categories,
  '/categories_pictures': Categories,

  '/categories_artist/cat_num': QuestionArtist,
  '/categories_pictures/cat_num': QuestionPictures,

  '/categories_artist/score': Score,
  '/categories_pictures/score': Score,
};

const app = document.querySelector('.app');
const localStorage = new LocalStorage(window.localStorage);
const gameM = new GameM();
const gameView = new GameView();
const gameC = new GameC();
const questionView = new QuestionView();
const questionC = new QuestionC();

storage.qInfo = gameM.qInfo;
storage.set = gameM.settings.set;

async function start() {
  await gameM.getData();

  function router() {
    const request = Utils.parseRequestURL();
    const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.catNum ? '/cat_num' : '') + (request.score ? '/score' : '');
    const page = routes[parsedURL] ? routes[parsedURL] : Error404;
    app.innerHTML = page.render(request);
    // ...............................................................................
    // ...............................................................................

    gameM.start(gameView, request.resource);
    gameView.start(gameM, app);
    gameC.start(gameM, app);

    gameM.updateView();

    if (request.resource === 'settings') {
      gameC.settings();
    }

    if (request.score) {
      gameC.score();
    }

    if (request.catNum) {
      const questionM = new QuestionM(gameM.data, request.resource, request.catNum - 1);
      questionM.start(questionView, gameM.qInfo, gameM.settings);
      questionView.start(questionM, app);
      questionM.createOptions();
      questionC.start(questionM, app);
    }
  }

  router();
  window.addEventListener('hashchange', router);
}

window.addEventListener('load', () => {
  const locData = localStorage.getData('storage') || storage;

  gameM.setVal(storage, locData);
  gameM.qInfo = storage.qInfo;
  gameM.settings.set = storage.set;
  start();
});

window.addEventListener('beforeunload', () => {
  localStorage.setData('storage', storage);
});
