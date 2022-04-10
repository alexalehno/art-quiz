import Footer from '../components/Footer.js';
import CategoryItem from '../components/CategoryItem.js';
import SettingBtn from '../components/header/SettingBtn.js';
import Logo from '../components/header/Logo.js';
import Nav from '../components/header/Nav.js';
import { importAll } from '../../services/funcs';
import { storage } from '../../app.js';


export const categoryImg = [];

importAll(require.context('../../images/image/category', true, /\.jpg$/), categoryImg);

const Categories = {
  render(request) {
    storage.questionType = request.resource;

    let type = request.resource.split('_')[1];

    return `
    <div class="category-page page">
      <header class="header container">
        ${Logo.render()}
        ${Nav.render(request, ['nav__link--active', 'hover-opacity'])}
        ${SettingBtn.render(request.resource)}
      </header>

      <main class="category container">
        <h2 class="category__title">Categories - ${type} quiz</h2>
        <ul class="category__list">
          ${categoryImg.map((item, i) => CategoryItem.render(i, item, request.resource)).join('\n')}
        </ul>
      </main>

      ${Footer.render()}
    </div>`;
  }
}

export default Categories;
