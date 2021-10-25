import Archivo from "./conexion.js";

window.onload = async () => {
  if (document.title == "Usuarios") {
    let objusuarios = await Archivo.consultarusuarios();
    console.log(await objusuarios);
  }
};
