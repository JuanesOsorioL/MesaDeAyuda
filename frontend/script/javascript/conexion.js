import Localstorage from "./localstorage.js";

window.onload = async () => {
  if (Localstorage.validarlocalstorage("registro") != null) {
    const ventanaloguin = document.querySelector(".header--ventanaLoguin");
    ventanaloguin.innerHTML = "";
    let div = document.createElement("div");
    let a = document.createElement("a");
    a.classList.add("Seleccionar");
    a.href = "../../../index.html";
    a.innerHTML = "Salir";
    a.id = "logout";
    a.addEventListener("click", function () {
      Localstorage.deletelocalstorage("registro");
    });

    div.appendChild(a);
    ventanaloguin.appendChild(div);

    let rol = Localstorage.getlocalstorage("registro").rol;
    if (rol == 2) {
      const img = document.querySelector(".header--img");
      img.src = "../../../img/admin.jpg";

      const nav = document.querySelector(".submenu");
      let div = document.createElement("div");
      div.classList.add("nav--subnav");
      div.innerHTML = `
    <ul class="nav--ul">
        <li class="nav__ul--li"><a href="./usuarios.html"><span class="icon-house"></span>Usuarios</a></li>
        <li class="nav__ul--li"><a href="./requerimientos.html"><span class="icon-earth"></span>Requerimientos</a>
        </li>
        <li class="nav__ul--li"><a href="./ticket.html"><span class="icon-earth"></span>Buscar Requerimiento</a>
        </li>
    </ul>`;
      nav.appendChild(div);
    } else {
      const img = document.querySelector(".header--img");
      img.src = "../../../img/user1.jpg";

      const nav = document.querySelector(".submenu");
      let div = document.createElement("div");
      div.classList.add("nav--subnav");
      div.innerHTML = `
    <ul class="nav--ul">
        <li class="nav__ul--li"><a href="./requrimiento.html"><span class="icon-house"></span>requerimiento</a></li>
        </li>
    </ul>`;
      nav.appendChild(div);
    }
  }

  if (document.title == "Usuarios") {
    let container = document.getElementById("container");
    let objusuarios = await consultarUsuarios();
    console.log(objusuarios.msj);
    let usuarios = objusuarios.msj;

    let estructura = "";
    usuarios.forEach((element) => {
      const { contrasena, edad, fecha_registro, id, nombre, rol, usuario } =
        element;
      /*  if (contrasena != undefined) { */
      let fila = `
      <tr>
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${usuario}</td>
        <td>${contrasena}</td>
        <td>${fecha_registro.substr(0, 10)}</td>
        <td>${edad}</td>
        <td>${rol}</td>
    </tr>
      `;
      estructura = estructura + fila;
      /*     } */
    });

    let table = document.createElement("table");
    table.innerHTML = `<tr>
  <td><strong>ID</strong></td>
  <td><strong>Nombre</strong></td>
  <td><strong>Usuario</strong></td>
  <td><strong>Contraseña</strong></td>
  <td><strong>Fecha Registro</strong></td>
  <td><strong>Edad</strong></td>
  <td><strong>Rol</strong></td>
</tr>
${estructura}
`;
    container.appendChild(table);
  }

  if (document.title == "Requerimientos") {
    let container = document.getElementById("container");
    let objrequerimientos = await consultarRequerimientos();
    if (objrequerimientos.estado == "Exitoso") {
      let requerimientos = objrequerimientos.msj;
      let estructura = "";
      requerimientos.forEach((element) => {
        const {
          usuario,
          solicitud,
          id,
          fecha_inicio_requerimiento,
          fecha_cierre_requerimiento,
          estado,
        } = element;
        if (id != undefined) {
          let fila = `
      <tr>
        <td>${id}</td>
        <td>${usuario}</td>
        <td>${fecha_inicio_requerimiento.substr(0, 10)}</td>
        <td>${estado}</td>
        <td><button type="button" id="btnVer">Ver</button></td>
    </tr>
      `;
          estructura = estructura + fila;
        }
      });

      let table = document.createElement("table");
      table.innerHTML = `<tr>
  <td><strong>ID</strong></td>
  <td><strong>Usuario</strong></td>
  <td><strong>Fecha De Creacion</strong></td>
  <td><strong>Estado</strong></td>
   <td><strong>Ver</strong></td>
</tr>
${estructura}
`;
      container.appendChild(table);
      let btnver = document.querySelectorAll("#btnVer");
      btnver.forEach((item) => {
        item.addEventListener("click", function (params) {
          let idticket =
            params.target.parentNode.parentNode.children[0].textContent;
          Localstorage.setlocalstorage("ticket", idticket);
          location.href = "ticket.html";
        });
      });
    } else {
      container.innerHTML = `<h1>NO hay requerimientos registrados</h1>`;
    }
  }

  if (document.title == "Ticket") {
    let numero = Localstorage.getlocalstorage("ticket");
    let container = document.getElementById("container");
    if (numero != null) {
      console.log(numero);
    } else {
      console.log("null");
    }
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
  registro: async (body) => {
    console.log(body);
    let resultado = await fetch("http://localhost:3000/agregarusuario", {
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
    /*     console.log(resultado); */
    return resultado;
  },
  /*  consultarusuarios: consultar, */
};

async function consultarUsuarios() {
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
  /*     console.log(resultado); */
  return resultado;
}

async function consultarRequerimientos() {
  let resultado = await fetch("http://localhost:3000/consultartickets", {
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
  return resultado;
}
