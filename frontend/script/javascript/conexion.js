function crear(body) {
  fetch("http://localhost:3000/agregarusuario", {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res2) => console.log(res2.respuesta));
}

function consultar() {
  fetch("http://localhost:3000/index", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res2) => console.log(res2));
}

///localstorage
function asignarlocalstorage(params) {
  let usuario = { nombre: "juan", rol: 1, usuario: "juanes" };
  localStorage.setItem("usuario", JSON.stringify(usuario));
}

function obtenerlocalstorage(params) {
  let usuariol = JSON.parse(localStorage.GetItem("usuario"));
}
function getlogin(objeto){}

module.exports.getlogin=getloguin;