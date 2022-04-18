class QuestionC {
  qModel = null;

  qField = null;

  start(model, field) {
    this.qModel = model;
    this.qField = field;

    let cls = null;
    cls = (this.qModel.type === 'categories_artist') ? cls = '.question-artist__options' : cls = '.question-pictures__options';

    const options = this.qField.querySelector(cls);
    options.addEventListener('click', (e) => {
      if (!this.qModel.isAnswered) { this.checkAnswer(e); }
    });

    const nextQ = this.qField.querySelector('.question-result__btn');
    nextQ.addEventListener('click', () => {
      if (this.qModel.isAnswered) this.nextQuestion();
    });

    const quitGameBtn = this.qField.querySelector('.quit-game');
    quitGameBtn.addEventListener('click', (e) => this.cancelQuit(e));

    const playAgainBtn = this.qField.querySelector('.play-again');
    playAgainBtn.addEventListener('click', () => this.playAgain());

    const quitBtn = this.qField.querySelector('.quit-btn');
    quitBtn.addEventListener('click', () => this.quitGame());
  }

  checkAnswer = (e) => this.qModel.checkAnswer(e);

  cancelQuit = (e) => this.qModel.cancelQuit(e);

  playAgain = () => this.qModel.playAgain();

  quitGame = () => this.qModel.quitGame();

  nextQuestion = () => this.qModel.nextQuestion();
}

export default QuestionC;
