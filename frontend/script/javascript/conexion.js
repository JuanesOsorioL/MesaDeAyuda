window.onload = () => {
  if (localStorage.key("registro") != null) {
  } else {
  }
};

export default {
  getlogin: async (body) => {
    let resultado = await fetch("http://localhost:3000/loguin", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((respuesta) => {
        return respuesta;
      });
    return resultado;
  },
  setlocalstorage: (body) => {
    localStorage.setItem("registro", JSON.stringify(body));
  },
  getlocalstorage: () => {
    return JSON.parse(localStorage.GetItem("registro"));
  },
  deletelocalstorage: () => {
    localStorage.removeItem("registro");
  },
};

async function hhhh(body) {
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
