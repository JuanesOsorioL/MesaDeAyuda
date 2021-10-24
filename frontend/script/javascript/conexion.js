async function loguin() {
  let data = { usuario: "admin", contrasena: "123" };
  let resultado = await fetch("http://localhost:3000/loguin", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => res.json())
    .then((respuesta) => {
      return respuesta;
    });
  console.log(resultado);
  return resultado;
}

async function registro() {
  let data = {
    nombre: "prueba1",
    usuario: "prueba1",
    contrasena: "prueba1",
    edad: 1,
    fecha_registro: "2021-10-23",
  };
  let resultado = await fetch("http://localhost:3000/agregarusuario", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => res.json())
    .then((respuesta) => {
      return respuesta;
    });
  console.log(resultado);
  /* return resultado; */
}

async function consultarusuarios() {
  let resultado = await fetch("http://localhost:3000/consultarusuarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((res) => res.json())
    .then((respuesta) => {
      return respuesta;
    });
  console.log(resultado);
  return resultado;
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