export const lastCat = (n) => n < 12 ? ++n : n = '';

export function importAll(r, arr) {
  r.keys().forEach((s, i) => arr[i] = r(s));
}