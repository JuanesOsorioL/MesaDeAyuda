import Local from "./localstorage.js";
let nombre = Local.getlocalstorage().nombre;
let usuario = Local.getlocalstorage().usuario;
let boton = document.getElementById("enviar_solicitud");
let titulo = document.getElementById("titulo_nombre");
//value para input; textContent para spam (coloca texto y se puede dentro de otra etiqueta);
titulo.textContent="Bienvenido "+nombre;
diccionario_ticket=boton.addEventListener("click", function () {
    let solicitud =document.getElementById("dato_solicitud").value;
    dic_ticket=crear_solicitud(solicitud);;
    return dic_ticket;
  });

function crear_solicitud(solicitud){
    let ticket={
        usuario:usuario,
        solicitud:solicitud,
        fecha_inicio_requerimiento:fecha()};
    return ticket;
}

function fecha(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = yyyy + '/' + mm + '/' + dd;
return today;
}