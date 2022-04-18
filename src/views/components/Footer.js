import RSSlogo from '../../images/icon/main/logo-rs_school.svg';

const Footer = {
  render() {
    return `
    <footer class="footer container">
      <a class="footer__logo hover-opacity" href="https://rs.school/js/" target="rsschool">
        <img class="footer__logo-img" src="${RSSlogo}" alt="logo-rs_school">
      </a>

      <a class="footer__dev-name hover-opacity" href="https://www.linkedin.com/in/aleksandr-alehno-889bb0213/" target="linkedin">
        App developer: Aleksandr
      </a>

      <time class="footer__date">2022</time>
    </footer>`;
  },
};

export default Footer;
