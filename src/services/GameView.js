
class GameView {
  gModel = null;
  gField = null;

  categoryItems = null;
  scoreItems = null;

  start(model, field) {
    this.gModel = model;
    this.gField = field;

    this.categoryItems = this.gField.querySelectorAll('.category-item');
    this.scoreItems = this.gField.querySelectorAll('.score__item');
  }

  update() {
    if (this.categoryItems.length) {
      this.categoryCard()
    }

    // ..................score item.............................................

    let data = this.gModel.data;
    let count = this.gModel.count;
    let catType = this.gModel.catType;
    let infoArr = this.gModel.pages;


    if (this.scoreItems.length && infoArr.length) {
      document.querySelector('.score__sub-title').classList.add('none');

      this.scoreItems.forEach((item, i) => {
        item.classList.remove('none');
        item.classList.remove('gray');

        if (!infoArr[count].questns[i]) {
          item.classList.add('gray');
        }

        // ...........................................
        setInfo(catType, count, infoArr, this.getImg);

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


      // .....................показать информацию score item.......................
      if (this.gModel.isItemShown) {
        const scoreItem = this.gModel.scoreItem.querySelector('.score__item-content');
        scoreItem.classList.toggle('score__item-content--show');
      }
      // ....................номера страниц..........................
      const numPages = this.gField.querySelectorAll('.score-btns__num');

      numPages[0].textContent = this.gModel.pagesLength ? this.gModel.numPage : this.gModel.pagesLength;
      numPages[1].textContent = this.gModel.pagesLength;
      // .........................................................
    }
  }

  categoryCard() {
    this.gModel.qInfo.forEach(item => {
      if (this.gModel.catType === item.type) {
        let catItemNums = this.categoryItems[item.num].querySelectorAll('.category-item__num');
        catItemNums[0].textContent = item.ready;
        catItemNums[1].textContent = item.total;

        this.categoryItems[item.num].classList.remove('not-played');
      }
    })
  }

  // ........................................................................
  getImg(i, d) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/alexalehno/image-data/master/img/${i}.jpg`;
    img.onload = () => d.style.backgroundImage = `url(${img.src})`;
  }
}

export default GameView;