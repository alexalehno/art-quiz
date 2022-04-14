import Footer from '../components/Footer.js';
import SettingBtn from '../components/header/SettingBtn.js';
import Logo from '../components/header/Logo.js';
import Nav from '../components/header/Nav.js';

import ScoreItem from '../components/ScoreItem';


function createItem() {
  let str = '';

  for (let i = 0; i < 10; i++) {
    str += ScoreItem.render();
  }
  return str;
}


const Score = {
  render(request) {

    let type = request.resource.split('_')[1];

    return `
    <div class="score-page page">
      <header class="header container">
        ${Logo.render()}
        ${Nav.render(request, ['hover-opacity', 'nav__link--active'])}
        ${SettingBtn.render(`${request.resource}/${request.score}`)}
      </header>

      <main class="score container">
        <h2 class="score__title">${type} quiz</h2>
        <div class="score-content">
          <p class="score__sub-title">Score Page</p>
          <ul class="score__list">${createItem()}</ul>
        </div>

        <div class="score-btns score-btns--margin"> 
          <button class="score-btns__btn hover-opacity" data-sign="0"></button>
          <div class="score-btns__nums">
            <span class="score-btns__num">0</span>
            / 
            <span class="score-btns__num">0</span>
          </div>
          <button class="score-btns__btn hover-opacity" data-sign="1"></button>
        </div>
      </main>

      ${Footer.render()}
    </div>`;
  }
}

export default Score;
