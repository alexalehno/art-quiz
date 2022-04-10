class LocalStorage {
  getData(name) {
    if (localStorage.getItem(name)) {
      return JSON.parse(localStorage.getItem(name));
    }
  }

  setData(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }
}

export default LocalStorage;