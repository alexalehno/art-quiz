import icon from '../../images/icon/setting/cross.svg';

const CloseBtn = {
  render(url) {
    return `
    <a class="set-btn hover-rotate" href="/#${url}">
      <img src="${icon}" alt="cross">
    </a>`;
  }
}

export default CloseBtn;