class LocalStorage {
  constructor(locStore) {
    this.localStorage = locStore;
  }

  getData(name) {
    let data;

    if (this.localStorage.getItem(name)) {
      data = JSON.parse(this.localStorage.getItem(name));
    }

    return data;
  }

  setData(name, data) {
    this.localStorage.setItem(name, JSON.stringify(data));
  }
}

export default LocalStorage;
