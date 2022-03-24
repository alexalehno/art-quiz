import LocalStorage from './localStorage';

export let obj = {
  btnPath: null,
  questionType: null,
}

export const navIcons = [];
export const categoryImg = [];

importAll(require.context('../images/icon/category', true, /\.svg$/), navIcons);
importAll(require.context('../images/image/category/main', true, /\.jpg$/), categoryImg);

function importAll(r, arr) {
  r.keys().forEach((s, i) => arr[i] = r(s));
}


const storage = new LocalStorage();

window.addEventListener('load', () => obj = storage.getData());
window.addEventListener('beforeunload', () => storage.setData(obj));

