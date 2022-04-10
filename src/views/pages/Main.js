import Footer from '../components/Footer.js';
import SettingBtn from '../components/header/SettingBtn.js';
import mainLogo from '../../images/icon/main/logo-main.svg';

const Main = {
  
  render() {
    return `
    <div class="main-page page">
      <header class="main-page__header header container">
        ${SettingBtn.render('')}
      </header>

      <main class="main container">
        <img class="main__logo" src="${mainLogo}" alt="logo-img">

        <div class="main__question">
          <a class="main__question-btn hover-bg" href="/#/categories_artist">Artist quiz</a>
          <a class="main__question-btn hover-bg" href="/#/categories_pictures">Pictures quiz</a>
        </div>
      </main>

      ${Footer.render()}
    </div>`;
  }
}

export default Main;