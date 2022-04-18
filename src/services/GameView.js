import { getImg, btnAnimation } from './funcs';

class GameView {
  gModel = null;

  gField = null;

  categoryItems = null;

  scoreItems = null;

  volumeRange = null;

  volumeBtns = null;

  page = null;

  start(model, field) {
    this.gModel = model;
    this.gField = field;

    this.categoryItems = this.gField.querySelectorAll('.category-item');
    this.scoreItems = this.gField.querySelectorAll('.score__item');

    this.volumeRange = this.gField.querySelector('.settings__volume-progress');
    this.volumeBtns = this.gField.querySelectorAll('.settings__volume-img');

    this.page = this.gField.querySelector('.page');
  }

  update() {
    const { data } = this.gModel;
    const { pageNum } = this.gModel;
    const { catType } = this.gModel;
    const { pages } = this.gModel;

    // ..................category item.............................................
    if (this.categoryItems.length) {
      this.categoryCard(pages);
    }

    // ..................score item.............................................
    if (this.scoreItems.length && pages.length) {
      this.scoreCard(data, pageNum, catType, pages);
    }

    // ........................................................................
    if (catType === 'settings') {
      this.settings();
    }
  }

  settings() {
    if (this.gModel.isSoundPlay) {
      this.gModel.audio.play();
    }

    // ..............................анимация кнопки settings....................................
    if (this.gModel.isSaved && document.documentElement.clientWidth >= 768) {
      btnAnimation('save', this.page);
    }

    // ..............................time game....................................................
    const answerBtns = this.gField.querySelector('.settings__answer-btn-wrap');
    const checkBox = this.gField.querySelector('.settings__time-input');
    const { isTimeGame } = this.gModel.settings.pre;

    if (isTimeGame) {
      answerBtns.classList.remove('opacity');
      answerBtns.children[0].removeAttribute('disabled');
      answerBtns.children[2].removeAttribute('disabled');
    } else {
      answerBtns.classList.add('opacity');
      answerBtns.children[0].setAttribute('disabled', true);
      answerBtns.children[2].setAttribute('disabled', true);
    }

    checkBox.checked = isTimeGame;

    // ..............................time to answer....................................
    const timeNum = answerBtns.querySelector('.settings__answer-input');
    timeNum.value = this.gModel.settings.pre.timeToAnswer;

    // ..............................sound....................................................
    const { volume } = this.gModel.settings.pre;
    this.volumeRange.value = volume;
    this.volumeRange.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${volume}%, #A4A4A4 ${volume}%, #A4A4A4 100%)`;

    if (+volume) {
      this.volumeBtns[0].classList.remove('settings__volume-img--active');
      this.volumeBtns[1].classList.add('settings__volume-img--active');
    } else {
      this.volumeBtns[0].classList.add('settings__volume-img--active');
      this.volumeBtns[1].classList.remove('settings__volume-img--active');
    }
  }

  scoreCard(data, pageNum, catType, pages) {
    document.querySelector('.score__sub-title').classList.add('none');
    document.querySelector('.score__list').classList.remove('none');

    this.scoreItems.forEach((item, i) => {
      if (item.classList.contains('gray')) {
        item.classList.remove('gray');
      }

      if (!pages[pageNum].questns[i]) {
        item.classList.add('gray');
      }

      const inner = item.querySelectorAll('.score__item-title, .score__item-bg, .score__item-name, .score__item-artist, .score__item-year');

      let c;

      c = catType === 'categories_artist' ? c = i : c = i + 120;

      const num = pages[pageNum].num * 10 + c;

      inner[0].textContent = `Cat-${pages[pageNum].num + 1}`;
      inner[2].textContent = data[num].name;
      inner[3].textContent = data[num].author;
      inner[4].textContent = data[num].year;
      getImg(data[num].imageNum, inner[1]);
    });

    // ............................................................
    // ....................номера страниц..........................
    const numPages = this.gField.querySelectorAll('.score-btns__num');
    numPages[0].textContent = pageNum + 1;
    numPages[1].textContent = pages.length;
    // .....................показать информацию score item.......................
    if (this.gModel.isItemShown) {
      const scoreItem = this.gModel.scoreItem.querySelector('.score__item-content');
      scoreItem.classList.toggle('score__item-content--show');
    }
  }

  categoryCard(pages) {
    pages.forEach((item) => {
      const catItemNums = this.categoryItems[item.num].querySelectorAll('.category-item__num');
      this.categoryItems[item.num].classList.remove('not-played');
      catItemNums[0].textContent = item.ready;
      catItemNums[1].textContent = item.total;
    });
  }
}

export default GameView;
