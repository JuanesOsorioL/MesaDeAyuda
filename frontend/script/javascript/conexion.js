import Localstorage from "./localstorage.js";

window.onload = () => {
  if (Localstorage.validarlocalstorage() != null) {
    const ventanaloguin = document.querySelector(".header--ventanaLoguin");
    ventanaloguin.innerHTML = "";
    let div = document.createElement("div");
    let a = document.createElement("a");
    a.classList.add("Seleccionar");
    a.href = "../../../index.html";
    a.innerHTML = "Salir";
    a.id = "logout";
    a.addEventListener("click", function () {
      Localstorage.deletelocalstorage();
    });

    div.appendChild(a);
    ventanaloguin.appendChild(div);

    let rol = Localstorage.getlocalstorage().rol;
    if (rol == 2) {
      const img = document.querySelector(".header--img");
      img.src = "../../../img/admin.jpg";
      const nav = document.querySelector(".submenu");

      let div = document.createElement("div");
      div.classList.add("nav--subnav");
      div.innerHTML = `
    <ul class="nav--ul">
        <li class="nav__ul--li"><a href="./quienesomos.html"><span class="icon-house"></span>Quienes Somos</a></li>
        <li class="nav__ul--li"><a href="./estructuraorganizacional.html"><span class="icon-earth"></span>Estructura Organizacional</a>
        </li>
    </ul>`;
      nav.appendChild(div);
    } else {
      const img = document.querySelector(".header--img");
      img.src = "../../../img/user.png";
    }
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
