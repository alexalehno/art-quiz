import icon from '../../../images/icon/setting/cross.svg';

const CloseBtn = {
  render(path, cls) {
    return `
    <a class="set-btn hover-rotate ${cls}" href="/#/${path}">
      <img src="${icon}" alt="cross">
    </a>`;
  },
};

export default CloseBtn;
