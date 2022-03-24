import Footer from '../components/Footer.js';
import SettingBtn from '../components/Setting-btn.js';
import { navIcons } from '../../modules/global.js';
import { obj } from '../../modules/global.js';

const Score = {
  render(url) {
    return `
    <div class="score-page page">
      <header class="header container">
        <a class="header__logo" href="/#/">
          <img class="header__logo-img" src="${navIcons[3]}" alt="logo-category">
        </a>

        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a class="nav__link hover-opacity" href="/#/">
                <img class="nav__icon" src="${navIcons[0]}" alt="nav-icon">
                Home
              </a>
            </li>
            
            <li class="nav__item">
              <a class="nav__link hover-opacity" href="/#/${obj.questionType}">
                <img class="nav__icon" src="${navIcons[1]}" alt="nav-icon">
                Categories
              </a>
            </li>
            
            <li class="nav__item">
              <a class="nav__link nav__link--active" href="/#/score">
                <img class="nav__icon" src="${navIcons[2]}" alt="nav-icon">
                Score
              </a>
            </li>
          </ul>
        </nav>

        ${SettingBtn.render(`/${url.resource}`)}
      </header>

      <main class="score container">
        <h1 class="score__title">Score</h1>
      </main>

      ${Footer.render()}
    </div>`;
  }
}

export default Score;
