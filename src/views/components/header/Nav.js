import { storage } from '../../../app.js';
import { importAll } from '../../../services/funcs.js';


const navIcons = [];

importAll(require.context('../../../images/icon/nav', true, /\.svg$/), navIcons);

const Nav = {
  render(request, cls) {
    return `
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <a class="nav__link hover-opacity" href="/#/">
            <img class="nav__icon" src="${navIcons[0]}" alt="icon">
            Home
          </a>
        </li>
        
        <li class="nav__item">
          <a class="nav__link ${cls[0]}" href="/#/${storage.questionType}">
            <img class="nav__icon" src="${navIcons[1]}" alt="icon">
            Categories
          </a>
        </li>
        
        <li class="nav__item">
          <a class="nav__link ${cls[1]}" href="/#/${request.resource}/score">
            <img class="nav__icon" src="${navIcons[2]}" alt="icon">
            Score
          </a>
        </li>
      </ul>
    </nav>`;
  }
}

export default Nav;