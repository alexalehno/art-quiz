class LocalStorage {
  getData() {
    if (localStorage.getItem('data')) {
      let data = localStorage.getItem('data');
      return JSON.parse(data);
    }
  }

  setData(p) {
    let data = JSON.stringify(p);
    localStorage.setItem('data', data);
  }
}

export default LocalStorage;




