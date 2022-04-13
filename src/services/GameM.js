import soundOn from '../audio/sound-on.mp3';

class GameM {
  constructor() {
    this.data = null;
    this.qInfo = [];
    this.scoreItem = null;
    this.isItemShown = false;
    this.count = null;
    this.pages = null;

    this.audio = new Audio();
    this.audio.volume = null;
    this.audio.src = soundOn; //??????????????
    this.isSoundPlay = false;

    this.isSaved = false;
    this.btnInner = null;

    this.settings = {
      pre: {
        volume: 0,
        isTimeGame: false,
        timeToAnswer: 30,
      },

      set: {
        volume: 0,
        isTimeGame: true,
        timeToAnswer: 15,
      },

      default: {
        volume: 0,
        isTimeGame: false,
        timeToAnswer: 5,
      },
    };
  }

  gView = null;
  catType = null;


  async getData() {
    const url = 'https://raw.githubusercontent.com/alexalehno/image-data/master/data.json';
    const res = await fetch(url);
    this.data = await res.json();
  }

  start(view, type) {
    this.gView = view;
    this.catType = type;
    this.setCount();
    this.setVal(this.settings.pre, this.settings.set);
  }

  saveValue(e) {
    let setBtn = e.target.closest('.settings__btn');
    if (!setBtn) return;

    let btnText = e.target.textContent.toLowerCase();

    if (btnText === 'default') this.setVal(this.settings.pre, this.settings.default);
    if (btnText === 'save') this.setVal(this.settings.set, this.settings.pre);

    this.isSaved = true;
    this.btnInner = btnText;
    this.updateView();
    this.isSaved = false;
  }

  setVal(obj1, obj2) {
    for (let key in obj2) {
      obj1[key] = obj2[key];
    }
  }

  setCheckbox(e) {
    this.settings.pre.isTimeGame = e.target.checked; // <=
    this.updateView();
  }

  setVolume(e) {
    this.settings.pre.volume = e.target.value; // <=
    this.audio.volume = this.settings.pre.volume / 100;
    this.isSoundPlay = true;
    this.updateView();
    this.isSoundPlay = false;
  }

  setTime(e) {
    let setTimeBtn = e.target.closest('.settings__answer-btn');
    if (!setTimeBtn) return;

    let sign = e.target.textContent;
    let num = this.settings.pre.timeToAnswer; // <=

    sign === '+' ? num += 5 : num -= 5;

    if (num > 30) num = 30;
    if (num <= 5) num = 5;

    this.settings.pre.timeToAnswer = num; // <=
    this.updateView();
  }

  setCount() {
    let count = 0;
    this.count = count;
    this.pages = this.qInfo.filter(item => item.type === this.catType);
  }

  updateView() {
    if (this.gView) {
      this.gView.update();
    }
  };

  switchPage(e) {
    let scoreItem = e.target.closest('.score-btns__btn');
    if (!scoreItem) return;

    let sign = scoreItem.getAttribute('data-sign');

    +sign ? this.count++ : this.count--;
    if (this.count > this.pages.length - 1) this.count = this.pages.length - 1;
    if (this.count < 0) this.count = 0;

    this.updateView();
  }

  showScoreInfo(e) {
    let scoreItem = e.target.closest('.score__item');
    if (!scoreItem) return;

    this.scoreItem = scoreItem;
    this.isItemShown = true;
    this.updateView();
    this.isItemShown = false;
  }
}

export default GameM;