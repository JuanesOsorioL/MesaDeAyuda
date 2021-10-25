import Archivo from "./conexion.js";
import Localstorage from "./localstorage.js";

const btnIngresar = document.querySelector(".btn-ingresar");
btnIngresar.addEventListener("click", function () {
  accion();
});

async function accion() {
  let usuario = document.getElementById("user").value;
  let contrasena = document.getElementById("clave").value;
  let entra = {
    usuario,
    contrasena,
  };

  let respuesta = await Archivo.getlogin(entra);
  if (respuesta.estado == "Exitoso") {
    Localstorage.setlocalstorage("registro", respuesta.msj);
    location.href = "principal.html";
    /// mandar la conuslta al html principal
  } else {
    alert("Usuario no encontrado");
  }
}
