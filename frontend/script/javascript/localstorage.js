export default {
  setlocalstorage: (key, body) => {
    localStorage.setItem(key, JSON.stringify(body));
  },
  getlocalstorage: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
  deletelocalstorage: (key) => {
    localStorage.removeItem(key);
  },
  validarlocalstorage: (key) => {
    return localStorage.key(key);
  },
};
