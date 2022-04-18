const Utils = {

  parseRequestURL() {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    const r = url.split('/');

    const [first, second] = r.slice(1);
    const request = {};

    request.resource = first;

    if (+second) {
      request.catNum = second;
    } else {
      request.score = second;
    }

    return request;
  },
};

export default Utils;
