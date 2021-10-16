
/* let boton=document.getElementById("enviar");
boton.addEventListener("click",function () {
    let edad=document.getElementById("dato_edad_usuario").value;
    let nombre=document.getElementById("dato_nombre_usuario").value;
    let nombre=document.getElementById("validar_contrasena").value;
        validar_edad_usuario(edad);
        validar_nombre_usuario(nombre);
        validar_contrasena(contrasena)
    });  */


function validar_edad_usuario(edad) {
    if (/^([0-9])+$/.test(edad)) {
        if (edad>=0 && edad >13 && edad <110) {
            return true;
        }   else {
            return false;
        }
    } else {
        return false;
    }   
}

function validar_nombre_usuario(string) {
    if (/^([A-Z][a-z]+[\s]*)+\S$/.test(string)) {
        return true;
    } else {
        return false;
    }
    }

function validar_contrasena(string){ if (string.lenght > 5) {
        if ([A-Z0-9]+$/i.test(string)) {
            return false;
        }   else {
            return true;
        }
    }   else {
        return true;
    }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_edad_usuario = validar_edad_usuario;
module.exports.validar_contrasena = validar_contrasena;


