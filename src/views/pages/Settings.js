import Footer from '../components/Footer';
import CloseBtn from '../components/header/CloseBtn';
import muteBtn from '../../images/icon/setting/mute.svg';
import soundBtn from '../../images/icon/setting/sound.svg';
import { storage } from '../../services/funcs';

const Settings = {
  render() {
    return `
    <div class="settings-page page">
      <header class="settings-page__header header container">
        <h2 class="settings-page__header-title">Settings</h2>
        ${CloseBtn.render(storage.btnPath, '')}    
      </header>
      
      <main class="settings container">
        <div class="settings__content">
          <div class="settings__volume">
            <h3 class="settings__title">Volume</h3>
            <input class="settings__volume-progress" type="range">
            <div class="settings__volume-img-wrap">
              <img class="settings__volume-img" src="${muteBtn}" alt="mute">
              <img class="settings__volume-img" src="${soundBtn}" alt="sound">
            </div>
          </div>

          <div class="settings__time-game">
            <h3 class="settings__title">Time game</h3>
            <div class="settings__time-switcher">
              <span class="settings__switch-on">On</span>
              <label class="settings__switch-label">
                <input class="settings__time-input" type="checkbox">
                <span class="settings__time-slider"></span>
              </label>
            </div>
          </div>

          <div class="settings__time-answer">
            <h3 class="settings__title">Time to answer</h3>
            <div class="settings__answer-btn-wrap">
              <button class="settings__answer-btn hover-opacity">&ndash;</button>
              <input class="settings__answer-input" type="number" readonly>
              <button class="settings__answer-btn hover-opacity">+</button>
            </div>
          </div>
        </div>

        <div class="settings__buttons">
          <button class="settings__btn hover-opacity">Default</button>
          <button class="settings__btn hover-opacity">Save</button>
        </div>
      </main>
      
      ${Footer.render()}
    </div>`;
  },
};

export default Settings;
