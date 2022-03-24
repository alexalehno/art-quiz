import Footer from '../components/Footer.js';
import CategoryItem from '../components/Category-item.js';
import SettingBtn from '../components/Setting-btn.js';
import { navIcons } from '../../modules/global.js';
import { categoryImg } from '../../modules/global.js';

import { obj } from '../../modules/global.js';

const Categories = {
  render(url) {
    obj.questionType = `${url.resource}`;

    return `
    <div class="category-page page">
      <header class="header container">
        <a class="header__logo" href="/#/">
          <img class="header__logo-img" src="${navIcons[3]}" alt="logo-category">
        </a>

        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a class="nav__link hover-opacity" href="/#/">
                <img class="nav__icon" src="${navIcons[0]}">
                Home
              </a>
            </li>
            
            <li class="nav__item">
              <a class="nav__link nav__link--active" href="/#/${obj.questionType}">
                <img class="nav__icon" src="${navIcons[1]}">
                Categories
              </a>
            </li>
            
            <li class="nav__item">
              <a class="nav__link hover-opacity" href="/#/score">
                <img class="nav__icon" src="${navIcons[2]}">
                Score
              </a>
            </li>
          </ul>
        </nav>

        ${SettingBtn.render(`/${url.resource}`)}
      </header>

      <main class="category container">
        <h2 class="category__title">Categories</h2>
        <ul class="category__list">
          ${categoryImg.map((el, i) => CategoryItem.render(i, categoryImg, url)).join('\n')}
        </ul>
      </main>

      ${Footer.render()}
    </div>`;
  }
}

export default Categories;
