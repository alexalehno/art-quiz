class GameC {
  gModel = null;

  gField = null;

  start(model, field) {
    this.gModel = model;
    this.gField = field;

    const scoreList = this.gField.querySelector('.score__list');
    scoreList.addEventListener('click', (e) => this.showScoreInfo(e));

    const scoreBtns = this.gField.querySelector('.score-btns');
    scoreBtns.addEventListener('click', (e) => this.switchPage(e));
  }

  settings(model, field) {
    this.gModel = model;
    this.gField = field;

    const volumeRange = this.gField.querySelector('.settings__volume-progress');
    volumeRange.addEventListener('input', (e) => this.setVolume(e));

    const timeGame = this.gField.querySelector('.settings__time-input');
    timeGame.addEventListener('input', (e) => this.setCheckbox(e));

    const timeAmountBtns = this.gField.querySelector('.settings__answer-btn-wrap');
    timeAmountBtns.addEventListener('click', (e) => this.setTime(e));

    const setBtns = this.gField.querySelector('.settings__buttons');
    setBtns.addEventListener('click', (e) => this.saveValue(e));
  }

  saveValue = (e) => this.gModel.saveValue(e);

  setTime = (e) => this.gModel.setTime(e);

  setCheckbox = (e) => this.gModel.setCheckbox(e);

  setVolume = (e) => this.gModel.setVolume(e);

  switchPage = (e) => this.gModel.switchPage(e);

  showScoreInfo = (e) => this.gModel.showScoreInfo(e);
}

export default GameC;
