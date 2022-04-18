class QuestionM {
  constructor(data, type, num) {
    this.data = data;
    this.options = null;
    this.isRightAnswer = false;
    this.isAnswered = false;
    this.isCatPassed = false;
    this.passedQuestns = [];

    this.num = num;
    this.catNum = num;
    this.current = (type === 'categories_artist') ? this.num *= 10 : (this.num *= 10) + 120;
    this.last = this.current + 10;
    this.type = type;

    this.catResBlock = 0;
    this.numTrueAnsw = null;
    this.quit = false;

    // ...................
    this.audio = new Audio();
    this.audio.volume = null;

    // ..............
    this.timeOut = null;
    this.intervalId = null;
    this.timeoutId = null;
  }

  qView = null;

  qInfo = null;

  settings = null;

  start(view, info, set) {
    this.qView = view;
    this.qInfo = info;
    this.settings = set;
    this.audio.volume = this.settings.set.volume / 100;
  }

  updateView() {
    if (this.qView) {
      this.qView.update();
    }
  }

  timeCounter(timeOut) {
    this.intervalId = setInterval(() => {
      this.timeOut--;

      if (this.timeOut === 0) {
        this.checkAnswer();
      }

      this.updateView();
    }, 1000);

    this.timeoutId = setTimeout(() => clearInterval(this.intervalId), timeOut * 1000);
  }

  createOptions() {
    function shuffle(arr) {
      const array = arr;

      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function randomRange(n, m) {
      return Math.floor(Math.random() * (m - n + 1)) + n;
    }

    function uniqueOptions(data, arr1, arr2) {
      const numsArr = arr1;
      const namesArr = arr2;

      while (numsArr.length < 4) {
        const num = randomRange(0, data.length - 1);

        if (numsArr.includes(num) || namesArr.includes(data[num].author)) {
          return uniqueOptions(data, arr1, arr2);
        }

        namesArr.push(data[num].author);
        numsArr.push(num);
      }

      return undefined;
    }

    const names = [];
    const numbers = [];
    const { author } = this.data[this.current];

    names.push(author);
    numbers.push(this.current);

    uniqueOptions(this.data, numbers, names);
    shuffle(numbers);

    this.options = numbers.map((el) => {
      if (el === this.current) {
        this.data[el].isRight = true;
      } else {
        this.data[el].isRight = false;
      }

      return this.data[el];
    });

    this.timeOut = this.settings.set.timeToAnswer;
    this.updateView();

    if (this.settings.set.isTimeGame) {
      this.timeCounter(this.timeOut);
    }
  }

  checkAnswer(e) {
    if (e) {
      const { target } = e;

      if (!target.hasAttribute('data-num')) {
        return;
      }

      const imageNum = target.getAttribute('data-num');
      this.isRightAnswer = this.data[imageNum].isRight;
    }

    this.passedQuestns.push(this.isRightAnswer);
    this.isAnswered = true;

    this.cancelTimeCount();
    this.updateView();
  }

  nextQuestion() {
    function chooseResBlock(num, length) {
      if (num && num !== length) {
        return 1;
      }

      if (num && num === length) {
        return 2;
      }

      return 0;
    }

    this.current++;
    this.isAnswered = false;
    this.isRightAnswer = false;

    if (this.current === this.last) {
      this.isCatPassed = true;
      this.numTrueAnsw = this.passedQuestns.filter((item) => item).length;
      this.catResBlock = chooseResBlock(this.numTrueAnsw, this.passedQuestns.length);
      this.updateView();
    }

    if (!this.isCatPassed) {
      this.createOptions();
    }

    if (this.isCatPassed) {
      this.sendInfo();
    }
  }

  sendInfo() {
    const catInfo = {
      type: null,
      num: null,
      questns: null,
      total: null,
      ready: null,
    };

    catInfo.type = this.type;
    catInfo.num = this.catNum;
    catInfo.questns = this.passedQuestns;
    catInfo.total = this.passedQuestns.length;
    catInfo.ready = this.passedQuestns.filter((item) => item).length;

    this.qInfo.forEach((item, i) => {
      if (item.num === catInfo.num && item.type === catInfo.type) {
        this.qInfo.splice(i, 1);
      }
    });

    this.qInfo.push(catInfo);
    this.qInfo.sort((a, b) => a.num - b.num);
  }

  playAgain() {
    this.current = this.last - 10;
    this.isCatPassed = false;
    this.passedQuestns = [];
    this.createOptions();
  }

  quitGame() {
    this.quit = true;
    this.updateView();

    if (this.settings.set.isTimeGame) {
      this.cancelTimeCount();
    }
  }

  cancelQuit(e) {
    const cancelBtn = e.target.closest('.cancel-quit');
    if (!cancelBtn) {
      return;
    }

    this.quit = false;
    this.updateView();

    if (this.settings.set.isTimeGame) {
      this.timeCounter(this.timeOut);
    }
  }

  cancelTimeCount() {
    clearInterval(this.intervalId);
    clearTimeout(this.timeoutId);
    this.intervalId = null;
    this.timeoutId = null;
  }
}

export default QuestionM;
