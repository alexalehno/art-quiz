
class QuestionC {
  qModel = null;
  qField = null;

  start(model, field) {
    this.qModel = model;
    this.qField = field;

    let cls = (this.qModel.type === 'categories_artist') ? cls = '.question-artist__options' : cls = '.question-pictures__options';

    const options = this.qField.querySelector(cls);
    options.addEventListener('click', (e) => this.chooseOption(e));

    const quitGame = this.qField.querySelector('.quit-game');
    quitGame.addEventListener('click', (e) => this.cancel(e));

    const playAgainBtn = this.qField.querySelector('.play-again');
    playAgainBtn.addEventListener('click', () => this.again());

    const quitBtn = this.qField.querySelector('.quit-btn');
    quitBtn.addEventListener('click', () => this.quit());

    const nextQ = this.qField.querySelector('.question-result__btn');
    nextQ.addEventListener('click', () => {
      if (this.qModel.isAnswered) this.next();
    })
  }

  // контроллер вызывает только методы модели
  chooseOption = (e) => this.qModel.checkAnswer(e);
  cancel = (e) => this.qModel.cancelQuit(e);
  again = () => this.qModel.playAgain();
  quit = () => this.qModel.quitGame();
  next = () => this.qModel.nextQuestion();
}

export default QuestionC;