import icon from '../../images/icon/main/set-btn.svg';
import  {obj} from '../../modules/global.js';


const SettingBtn = {
  render(p) {
    obj.btnPath = p;

    return `
    <a class="set-btn hover-rotate" href="/#/settings">
      <img src="${icon}" alt="setting btn">
    </a>`;
  }
}

export default SettingBtn;