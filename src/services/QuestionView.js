import { getImg } from './funcs';

import iconRight from '../images/icon/question/icon-right.svg';
import iconWrong from '../images/icon/question/icon-wrong.svg';

// ??????????????????????????????????????
import soundRight from '../audio/right.mp3';
import soundWrong from '../audio/wrong.mp3';
import soundRound from '../audio/round.mp3';
import soundClose from '../audio/close.mp3';

class QuestionView {
  qModel = null;

  qField = null;

  timeIndicator = null;

  questnEl = null;

  options = null;

  qIndicator = null;

  questnResult = null;

  catResult = null;

  catResNums = null;

  quitBlock = null;

  grayDiv = null;

  timeBlock = null;

  timeProgress = null;

  start(model, field) {
    this.qModel = model;
    this.qField = field;

    let cls1;
    let cls2;

    // ????????????????????????????????????
    cls1 = (this.qModel.type === 'categories_artist') ? cls1 = '.question-artist__img-block' : cls1 = '.question-title__artist-name';
    cls2 = (this.qModel.type === 'categories_artist') ? cls2 = '.question-artist__options' : cls2 = '.question-pictures__options';

    this.questnEl = this.qField.querySelector(cls1);
    this.options = this.qField.querySelector(cls2);
    // ????????????????????????????????????

    this.qIndicatorItems = this.qField.querySelectorAll('.questions-indicator__item');
    this.questnResult = this.qField.querySelectorAll('[data-result]');
    this.catResultArr = this.qField.querySelectorAll('.category-overlay');
    this.catResNums = this.qField.querySelectorAll('.category-result__num');
    this.quitBlock = this.qField.querySelector('.quit-overlay');
    this.timeIndicator = this.qField.querySelector('.time-indicator');
    this.timeBlock = this.qField.querySelector('.time-indicator__time');
    this.timeProgress = this.qField.querySelector('.time-indicator__progress-inner');
  }

  update() {
    this.renderOptions();
    this.renderIndicator();
    this.renderResQuestion();
    this.renderResCategory();
    this.renderQuitBlock();
  }

  renderResQuestion() {
    if (this.qModel.isAnswered) {
      this.questnResult[0].classList.remove('hidden');
      getImg(this.qModel.current, this.questnResult[1]);
      this.questnResult[3].textContent = this.qModel.data[this.qModel.current].name;
      this.questnResult[4].textContent = this.qModel.data[this.qModel.current].author;
      this.questnResult[5].textContent = this.qModel.data[this.qModel.current].year;

      const icon = this.qModel.isRightAnswer ? iconRight : iconWrong;
      this.questnResult[2].style.backgroundImage = `url(${icon})`;

      const sound = this.qModel.isRightAnswer ? soundRight : soundWrong;
      this.qModel.audio.src = sound;
      setTimeout(() => this.qModel.audio.play(), 400);

      // .................................................................
      if (this.qModel.type === 'categories_artist') {
        this.grayDiv = this.questnEl;
      } else {
        this.grayDiv = this.options;
      }

      this.grayDiv.classList.add('gray');
      // .................
    } else {
      this.questnResult[0].classList.add('hidden');
      if (this.grayDiv) this.grayDiv.classList.remove('gray');
    }
  }

  renderResCategory() {
    if (this.qModel.isCatPassed) {
      if (this.qModel.catResBlock === 1) {
        this.catResNums[0].textContent = this.qModel.numTrueAnsw;
        this.catResNums[1].textContent = this.qModel.passedQuestns.length;
      }

      this.catResultArr[this.qModel.catResBlock].classList.remove('hidden');

      // .............?????????
      this.qModel.audio.src = soundRound;
      this.qModel.audio.play();
      // .................
    } else {
      this.catResultArr[this.qModel.catResBlock].classList.add('hidden');
    }
  }

  renderQuitBlock() {
    if (this.qModel.quit) {
      this.quitBlock.classList.remove('hidden');

      // .............?????????
      this.qModel.audio.src = soundClose;
      setTimeout(() => this.qModel.audio.play(), 400);
      // .....................
    } else {
      this.quitBlock.classList.add('hidden');
    }
  }

  renderIndicator() {
    this.qModel.passedQuestns.forEach((item, i) => {
      if (!this.qModel.isCatPassed) {
        let color;
        color = item ? color = '#3dda69' : color = '#ff7e7e';
        this.qIndicatorItems[i].style.backgroundColor = color;
      } else {
        this.qIndicatorItems[i].style.backgroundColor = '#C4C4C4';
      }
    });
  }

  renderOptions() {
    this.qModel.options.forEach((item, i) => {
      if (this.qModel.type === 'categories_artist') {
        this.options.children[i].textContent = item.author;

        if (item.isRight) {
          getImg(item.imageNum, this.questnEl);
        }
      } else {
        getImg(item.imageNum, this.options.children[i]);

        if (item.isRight) {
          this.questnEl.textContent = `- ${item.author} -`;
        }
      }

      this.options.children[i].setAttribute('data-num', item.imageNum);
    });

    // ..............time game................
    if (this.qModel.settings.set.isTimeGame) {
      const { timeToAnswer } = this.qModel.settings.set;
      const { timeOut } = this.qModel;

      this.timeProgress.style.width = `${100 - (timeOut * 100) / timeToAnswer}%`;
      this.timeBlock.textContent = `0:${timeOut.toString().padStart(2, '0')}`;

      this.timeIndicator.classList.remove('opacity');
    } else {
      this.timeIndicator.classList.add('opacity');
    }
  }
}

export default QuestionView;
