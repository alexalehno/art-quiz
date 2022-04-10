
class GameC {
  gModel = null;
  gField = null;

  start(model, field) {
    this.gModel = model;
    this.gField = field;

    const scoreList = this.gField.querySelector('.score__list');
    scoreList.addEventListener('click', (e) => this.show(e));

    const scoreBtns = this.gField.querySelector('.score-btns');
    scoreBtns.addEventListener('click', (e) => this.switch(e));
  }

  switch = (e) => this.gModel.switchPage(e);
  show = (e) => this.gModel.showScoreInfo(e);
}

export default GameC;