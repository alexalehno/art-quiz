export function lastCat(n) {
  let num = n;

  if (num < 12) {
    return ++num;
  }

  return '';
}

export function importAll(r, arr) {
  const a = arr;

  r.keys().forEach((s, i) => {
    a[i] = r(s);
  });
}

export function getImg(i, d) {
  const bgElement = d;
  const img = new Image();

  img.src = `https://raw.githubusercontent.com/alexalehno/image-data/master/img/${i}.jpg`;
  img.onload = () => {
    bgElement.style.backgroundImage = `url(${img.src})`;
  };
}

export function btnAnimation(text, page) {
  function saved() {
    const el = document.createElement('span');

    el.textContent = text.toUpperCase();
    el.classList.add('settings-page__saved');
    page.append(el);

    setTimeout(() => el.remove(), 1000);
  }

  const timerId = setInterval(() => saved(text), 130);

  setTimeout(() => {
    clearInterval(timerId);
  }, 1000);
}

export const storage = {
  s: {
    btnPath: null,
    qInfo: null,
    set: null,
  },
};
