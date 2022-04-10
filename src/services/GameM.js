
class GameM {
  constructor() {
    this.data = null;
    this.qInfo = [];

    this.scoreItem = null;
    this.isItemShown = false;

    this.numPage = null;
    this.count = null;

    this.pages = null;
    this.pagesLength = null;
  }

  gView = null;
  catType = null;

  switchPage(e) {
    let scoreItem = e.target.closest('.score-btns__btn');
    if (!scoreItem) return;

    let sign = scoreItem.getAttribute('data-sign');

    +sign ? this.numPage++ : this.numPage--;

    if (this.numPage > this.pagesLength) this.numPage = this.pagesLength;
    if (this.numPage < 1) this.numPage = 1;


    +sign ? this.count++ : this.count--;

    if (this.count > this.pagesLength - 1) this.count = this.pagesLength - 1;
    if (this.count < 0) this.count = 0;


    console.log(this.count);
    console.log(this.pages);

    this.updateView();
  }

  setCount() {
    let count = 0;

    this.numPage = 1;
    this.pages = this.qInfo.filter(item => item.type === this.catType);
    this.pagesLength = this.pages.length;
    this.count = count;
  }

  // ....................................................

  async getData() {
    const url = 'https://raw.githubusercontent.com/alexalehno/image-data/master/data.json';
    const res = await fetch(url);
    this.data = await res.json();
  }

  start(view, type) {
    this.gView = view;
    this.catType = type;
    this.setCount();
  }

  updateView() {
    if (this.gView) {
      this.gView.update();
    }
  };

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