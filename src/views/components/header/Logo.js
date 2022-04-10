import icon from '../../../images/icon/logo/logo.svg';

const Logo = {
  render() {
    return `
    <a class="header__logo" href="/#/">
      <img class="header__logo-img" src="${icon}" alt="logo-category">
    </a>
    `;
  }
}

export default Logo;