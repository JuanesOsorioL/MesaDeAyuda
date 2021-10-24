export default {
  setlocalstorage: (body) => {
    localStorage.setItem("registro", JSON.stringify(body));
  },
  getlocalstorage: () => {
    return JSON.parse(localStorage.getItem("registro"));
  },
  deletelocalstorage: () => {
    localStorage.removeItem("registro");
  },
  validarlocalstorage: () => {
    return localStorage.key("registro");
  },
};
