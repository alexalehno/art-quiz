import soundOn from '../audio/sound-on.mp3';

class GameM {
  constructor() {
    this.data = null;
    this.qInfo = [];
    this.scoreItem = null;
    this.isItemShown = false;
    this.pageNum = null;
    this.pages = null;

    this.audio = new Audio();
    this.audio.volume = null;
    this.audio.src = soundOn; // ??????????????
    this.isSoundPlay = false;

    this.isSaved = false;

    this.settings = {
      pre: {
        volume: 0,
        isTimeGame: false,
        timeToAnswer: 30,
      },

      set: {
        volume: 100,
        isTimeGame: false,
        timeToAnswer: 10,
      },

      default: {
        volume: 0,
        isTimeGame: false,
        timeToAnswer: 5,
      },
    };

    this.setObj1 = null;
    this.setObj2 = null;
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
    const setBtn = e.target.closest('.settings__btn');
    if (!setBtn) return;

    const btnText = e.target.textContent.toLowerCase();

    if (btnText === 'default') {
      this.setVal(this.settings.pre, this.settings.default);
    }

    if (btnText === 'save') {
      this.setVal(this.settings.set, this.settings.pre);
      this.isSaved = true;
    }

    this.updateView();
    this.isSaved = false;
  }

  setVal(obj1, obj2) {
    this.setObj1 = obj1;
    this.setObj2 = obj2;

    const keys = Object.keys(this.setObj2);

    for (let i = 0; i < keys.length; i++) {
      this.setObj1[keys[i]] = this.setObj2[keys[i]];
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
    const setTimeBtn = e.target.closest('.settings__answer-btn');
    if (!setTimeBtn) return;

    const sign = e.target.textContent;
    let num = this.settings.pre.timeToAnswer; // <=

    if (sign === '+') {
      num += 5;
    } else {
      num -= 5;
    }

    if (num > 30) {
      num = 30;
    }

    if (num <= 5) {
      num = 5;
    }

    this.settings.pre.timeToAnswer = num; // <=
    this.updateView();
  }

  setCount() {
    const count = 0;
    this.pageNum = count;
    this.pages = this.qInfo.filter((item) => item.type === this.catType);
  }

  updateView() {
    if (this.gView) {
      this.gView.update();
    }
  }

  switchPage(e) {
    const scoreItem = e.target.closest('.score-btns__btn');
    if (!scoreItem) return;

    const sign = scoreItem.getAttribute('data-sign');

    if (+sign) {
      this.pageNum++;
    } else {
      this.pageNum--;
    }

    if (this.pageNum > this.pages.length - 1) {
      this.pageNum = this.pages.length - 1;
    }

    if (this.pageNum < 0) {
      this.pageNum = 0;
    }

    this.updateView();
  }

  showScoreInfo(e) {
    const scoreItem = e.target.closest('.score__item');
    if (!scoreItem) return;

    this.scoreItem = scoreItem;
    this.isItemShown = true;
    this.updateView();
    this.isItemShown = false;
  }
}

export default GameM;
