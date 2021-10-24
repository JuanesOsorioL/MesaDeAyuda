import Archivo from "./conexion.js";

const btnIngresar = document.querySelector(".btn-ingresar");
btnIngresar.addEventListener("click", function () {
  accion();
});

async function accion() {
  let usuario = document.getElementById("user").value;
  let contrasena = document.getElementById("clave").value;
  /* let cargar = validacion(
    validar_usuario(usuario),
    validar_contrasena(contrasena)
  ); */
  let objeto = IniciarSesion(true, usuario, contrasena);
  let respuesta = await Archivo.getlogin(objeto);
  console.log(await respuesta);
  if (respuesta.estado == "Exitoso") {
    Archivo.setlocalstorage(respuesta.msj);
    if (respuesta.msj.rol == 1) {
      location.href = "requerimeinto.html";
    } else {
      location.href = "principal.html";
    }
    /// mandar la conuslta al html principal
  } else {
    alert("Usuario no encontrado");
  }
}

function validar_usuario(string) {
  let r = /^([A-Za-z]+[\s]*)+\S$/;
  if (r.test(string)) {
    return true;
  } else {
    return false;
  }
}

function validar_contrasena(string) {
  let r = /[ \t\r\n\f]/;
  if (string.length >= 6) {
    if (r.test(string)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
function validacion(Usu, Con) {
  if (Usu && Con) {
    return true; //aqui se puede retorna que todo esta bien.
  } else {
    console.log(Usu, Con);
  }
}

function IniciarSesion(cargar, usuario, contrasena) {
  if (cargar) {
    let entra = {
      usuario,
      contrasena,
    };
    /*  console.log(entra); //retornar para la funcion get */
    return entra;
  } else {
    alert(
      "Por favor verifique que la contraseña no posea espacios y sea mayor a 6 caracteres"
    );
  }
}
