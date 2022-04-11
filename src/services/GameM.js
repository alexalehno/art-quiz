
class GameM {
  constructor() {
    this.data = null;
    this.qInfo = [];
    this.scoreItem = null;
    this.isItemShown = false;
    this.count = null;
    this.pages = null;

    // ...................
  }

  // sound() {

  // }

  // ....................................................

  gView = null;
  catType = null;

  switchPage(e) {
    let scoreItem = e.target.closest('.score-btns__btn');
    if (!scoreItem) return;

    let sign = scoreItem.getAttribute('data-sign');

    +sign ? this.count++ : this.count--;
    if (this.count > this.pages.length - 1) this.count = this.pages.length - 1;
    if (this.count < 0) this.count = 0;

    this.updateView();
  }

  setCount() {
    let count = 0;
    this.count = count;
    this.pages = this.qInfo.filter(item => item.type === this.catType);
  }

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