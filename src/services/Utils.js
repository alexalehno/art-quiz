const Utils = {

  parseRequestURL() {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split("/");

    let request = {}

    request.resource = r[1];
    isFinite(r[2]) ? request.catNum = r[2] : request.score = r[2];

    return request;
  }
}

export default Utils;