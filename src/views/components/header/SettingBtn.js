import icon from '../../../images/icon/main/set-btn.svg';
import { storage } from '../../../services/funcs';

const SettingBtn = {
  render(path) {
    storage.btnPath = path;

    return `
    <a class="set-btn hover-rotate" href="/#/settings">
      <img src="${icon}" alt="setting btn">
    </a>`;
  },
};

export default SettingBtn;
