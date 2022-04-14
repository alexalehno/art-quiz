import scss from './styles/index.scss';
import html from './index.html';
// ...............................................................................
import Main from './views/pages/Main.js';
import Settings from './views/pages/Settings.js';
import Categories from './views/pages/Categories.js';
import QuestionArtist from './views/pages/QuestionArtist.js';
import QuestionPictures from './views/pages/QuestionPictures.js';
import Error404 from './views/pages/Error404.js';
import Score from './views/pages/Score.js';
import Utils from './services/Utils.js';
// ...............................................................................
import QuestionM from './services/QuestionM.js';
import QuestionView from './services/QuestionView.js';
import QuestionC from './services/QuestionC.js';

import GameM from './services/GameM.js';
import GameView from './services/GameView.js';
import GameC from './services/GameC.js';
// ...............................................................................
import LocalStorage from './services/LocalStorage';
// ...............................................................................
// ...............................................................................


export let storage = {
  btnPath: null,
  questionType: null,
  qInfo: null,
  set: null,
}

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

const localStorage = new LocalStorage();

const gameM = new GameM();
const gameView = new GameView();
const gameC = new GameC();

const questionView = new QuestionView();
const questionC = new QuestionC();

storage.qInfo = gameM.qInfo;
storage.set = gameM.settings.set; //??????????????


async function start() {
  await gameM.getData();

  function router() {
    let request = Utils.parseRequestURL();
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.catNum ? '/cat_num' : '') + (request.score ? '/score' : '');
    let page = routes[parsedURL] ? routes[parsedURL] : Error404;
    app.innerHTML = page.render(request);
    // ...............................................................................
    // ...............................................................................

    gameM.start(gameView, request.resource);
    gameView.start(gameM, app);
    gameM.updateView();

    if (request.resource === 'settings') {
      gameC.settings(gameM, app);
    }

    if (request.score) {
      gameC.start(gameM, app);
    }

    // if (request.catNum) {
    //   const questionM = new QuestionM(gameM.data, request.resource, request.catNum - 1);
    //   questionM.start(questionView, gameM.qInfo, gameM.settings);
    //   questionView.start(questionM, app);
    //   questionM.createOptions();
    //   questionC.start(questionM, app);
    // }
  }

  router();
  window.addEventListener('hashchange', router);
}


window.addEventListener('load', () => {
  storage = localStorage.getData('storage') || storage;
  gameM.qInfo = storage.qInfo;
  gameM.settings.set = storage.set;  //??????????????
  start();
});

window.addEventListener('beforeunload', () => {
  localStorage.setData('storage', storage);
});

