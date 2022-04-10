import CloseBtn from '../header/CloseBtn.js';

const QuitGame = {
  render(request) {
    return `
    <div class="overlay quit-overlay hidden">
      <div class="quit-game">
        ${CloseBtn.render(`${request.resource}/${request.catNum}`, 'quit-game__img cancel-quit')}
        <p class="quit-game__title">Do you really want to quit the game?</p>
        <div class="quit-game__btn-wrap">
          <a class="quit-game__btn cancel-quit" href="/#/${request.resource}/${request.catNum}">Cancel</a> 
          <a class="quit-game__btn" href="/#/${request.resource}">Yes</a> 
        </div>
      </div>
    </div>
    `;
  }
}

export default QuitGame;