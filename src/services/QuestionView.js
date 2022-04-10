import iconRight from '../images/icon/question/icon-right.svg';
import iconWrong from '../images/icon/question/icon-wrong.svg';

class QuestionView {
  qModel = null;
  qField = null;

  questnEl = null;
  options = null;
  qIndicator = null;
  questnResult = null;
  catResult = null;
  catResNums = null;
  quitBlock = null;
  grayDiv = null;

  start(model, field) {
    this.qModel = model;
    this.qField = field;

    let cls1 = (this.qModel.type === 'categories_artist') ? cls1 = '.question-artist__img-block' : cls1 = '.question-title__artist-name';
    let cls2 = (this.qModel.type === 'categories_artist') ? cls2 = '.question-artist__options' : cls2 = '.question-pictures__options';

    this.questnEl = this.qField.querySelector(cls1);
    this.options = this.qField.querySelector(cls2);
    this.qIndicatorItems = this.qField.querySelectorAll('.questions-indicator__item');
    this.questnResult = this.qField.querySelectorAll('[data-result]');
    this.catResultArr = this.qField.querySelectorAll('.category-overlay');
    this.catResNums = this.qField.querySelectorAll('.category-result__num');
    this.quitBlock = this.qField.querySelector('.quit-overlay');
  }

  update() {
    this.renderOptions();
    this.renderIndicator();
    this.renderResQuestion();
    this.renderQuitBlock();
    this.renderResultBlock();
  }

  renderResQuestion() {
    if (this.qModel.isAnswered) {
      this.questnResult[0].classList.remove('hidden');
      showRes(this.qModel, this.questnResult, this.getImg);

      // .................
      (this.qModel.type === 'categories_artist') ? this.grayDiv = this.questnEl : this.grayDiv = this.options;
      this.grayDiv.classList.add('gray');

    } else {
      if (this.grayDiv) this.grayDiv.classList.remove('gray');
      this.questnResult[0].classList.add('hidden');
    }

    function showRes(model, arrEl, func) {
      func(model.current, arrEl[1]);
      arrEl[3].textContent = model.data[model.current].name;
      arrEl[4].textContent = model.data[model.current].author;
      arrEl[5].textContent = model.data[model.current].year;

      if (model.isRightAnswer) {
        arrEl[2].style.backgroundImage = `url(${iconRight})`;

      } else {
        arrEl[2].style.backgroundImage = `url(${iconWrong})`;
      }
    }
  }

  renderResultBlock() {
    if (this.qModel.isCatPassed) {
      if (this.qModel.catResBlock === 1) {
        this.catResNums[0].textContent = this.qModel.numTrueAnsw;
        this.catResNums[1].textContent = this.qModel.passedQuestns.length;
      }

      this.catResultArr[this.qModel.catResBlock].classList.remove('hidden');

    } else {
      this.catResultArr[this.qModel.catResBlock].classList.add('hidden');
    }
  }

  renderQuitBlock() {
    if (this.qModel.quit) {
      this.quitBlock.classList.remove('hidden');

    } else {
      this.quitBlock.classList.add('hidden');
    }
  }

  renderIndicator() {
    this.qModel.passedQuestns.forEach((item, i) => {
      if (!this.qModel.isCatPassed) {
        let color = item ? color = '#3dda69' : color = '#ff7e7e';
        this.qIndicatorItems[i].style.backgroundColor = color;

      } else {
        this.qIndicatorItems[i].style.backgroundColor = '#C4C4C4';
      }
    })
  }

  renderOptions() {
    this.qModel.options.forEach((item, i) => {
      if (this.qModel.type === 'categories_artist') {
        this.options.children[i].textContent = item.author;
        if (item.isRight) this.getImg(item.imageNum, this.questnEl);

      } else {
        this.getImg(item.imageNum, this.options.children[i]);
        if (item.isRight) this.questnEl.textContent = item.author;
      }

      this.options.children[i].setAttribute('data-num', item.imageNum);
    })
  }

  getImg(i, d) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/alexalehno/image-data/master/img/${i}.jpg`;
    img.onload = () => d.style.backgroundImage = `url(${img.src})`;
  }
}

export default QuestionView;