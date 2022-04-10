import icon from '../../../images/icon/main/set-btn.svg';
import { storage } from '../../../app.js';


const SettingBtn = {
  render(path) {
    storage.btnPath = path;

    return `
    <a class="set-btn hover-rotate" href="/#/settings">
      <img src="${icon}" alt="setting btn">
    </a>`;
  }
}

export default SettingBtn;