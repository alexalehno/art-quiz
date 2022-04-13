
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
    let data = this.gModel.data;
    let count = this.gModel.count;
    let catType = this.gModel.catType;
    let pages = this.gModel.pages;

    // ..................category item.............................................
    if (this.categoryItems.length) {
      this.categoryCard(pages);
    }

    // ..................score item.............................................
    if (this.scoreItems.length && pages.length) {
      this.scoreCard(data, count, catType, pages);
    }

    // ........................................................................
    if (this.gModel.catType === 'settings') {
      this.settings()
    }
  }

  settings() {
    if (this.gModel.isSoundPlay) {
      this.gModel.audio.play();
    }

    // ..............................анимация кнопки settings....................................
    if (this.gModel.isSaved) {
      this.animateSetBtn(this.gModel.btnInner, this.page);
    }

    // ..............................time game....................................................
    const answerBtns = this.gField.querySelector('.settings__answer-btn-wrap');
    const checkBox = this.gField.querySelector('.settings__time-input');
    let timeGame = this.gModel.settings.pre.isTimeGame;

    if (timeGame) {
      answerBtns.classList.remove('opacity');
      answerBtns.children[0].removeAttribute('disabled');
      answerBtns.children[2].removeAttribute('disabled');

    } else {
      answerBtns.classList.add('opacity');
      answerBtns.children[0].setAttribute('disabled', true);
      answerBtns.children[2].setAttribute('disabled', true);
    }

    checkBox.checked = timeGame;

    // ..............................time to answer....................................
    const timeNum = answerBtns.querySelector('.settings__answer-input');
    timeNum.value = this.gModel.settings.pre.timeToAnswer;

    // ..............................sound....................................................
    let vol = this.gModel.settings.pre.volume;
    this.volumeRange.value = vol;
    this.volumeRange.style.background = `linear-gradient(to right, #FFBCA2 0%, #FFBCA2 ${vol}%, #A4A4A4 ${vol}%, #A4A4A4 100%)`;

    if (+vol) {
      this.volumeBtns[0].classList.remove('settings__volume-img--active');
      this.volumeBtns[1].classList.add('settings__volume-img--active');

    } else {
      this.volumeBtns[0].classList.add('settings__volume-img--active');
      this.volumeBtns[1].classList.remove('settings__volume-img--active');
    }
  }

  animateSetBtn(text, page) {
    let timerId = null;
    timerId = setInterval(() => saved(text), 130);

    setTimeout(() => {
      clearInterval(timerId);
    }, 1000);

    function saved() {
      let el = document.createElement('p');
      el.textContent = text.toUpperCase();
      el.classList.add('settings-page__saved');
      page.append(el);
      setTimeout(() => el.remove(), 1000);
    }
  }

  scoreCard(data, count, catType, pages) {
    document.querySelector('.score__sub-title').classList.add('none');

    this.scoreItems.forEach((item, i) => {
      item.classList.remove('none');
      item.classList.remove('gray');
      if (!pages[count].questns[i]) item.classList.add('gray');
      setInfo(catType, count, pages, this.getImg);


      function setInfo(type, count, info, func) {
        const inner = item.querySelectorAll('.score__item-title, .score__item-bg, .score__item-name, .score__item-artist, .score__item-year');
        let c = type === 'categories_artist' ? c = i : c = i + 120;
        let num = info[count].num * 10 + c;

        inner[0].textContent = `Cat-${info[count].num + 1}`;
        inner[2].textContent = data[num].name;
        inner[3].textContent = data[num].author;
        inner[4].textContent = data[num].year;
        func(data[num].imageNum, inner[1]);
      }
    })

    // ............................................................
    // ....................номера страниц..........................
    const numPages = this.gField.querySelectorAll('.score-btns__num');
    numPages[0].textContent = count + 1;
    numPages[1].textContent = pages.length;
    // .....................показать информацию score item.......................
    if (this.gModel.isItemShown) {
      const scoreItem = this.gModel.scoreItem.querySelector('.score__item-content');
      scoreItem.classList.toggle('score__item-content--show');
    }
  }

  categoryCard(pages) {
    pages.forEach(item => {
      let catItemNums = this.categoryItems[item.num].querySelectorAll('.category-item__num');
      this.categoryItems[item.num].classList.remove('not-played');
      catItemNums[0].textContent = item.ready;
      catItemNums[1].textContent = item.total;
    })
  }

  getImg(i, d) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/alexalehno/image-data/master/img/${i}.jpg`;
    img.onload = () => d.style.backgroundImage = `url(${img.src})`;
  }
}

export default GameView;