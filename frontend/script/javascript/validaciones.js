function accion(){
  let usuario=document.getElementById("dato_nombre_usuario").value;
  let edad=document.getElementById("dato_edad_usuario").value;
  let nombre=document.getElementById("dato_nombre_completo").value;
  let contrasena=document.getElementById("dato_contrasena").value;
  validar_nombre_usuario(nombre);
  validar_nombre_usuario(usuario);
  validar_edad_usuario(edad);
  validar_contrasena(contrasena);
  alert("si entra");}

function validar_edad_usuario(edad) {
  if (/^([0-9])+$/.test(edad)) {
    if (edad>=0 && edad >13 && edad <110) {
      return alert(true);
    }else{
      return alert(false);
    }
  }else{
    return alert(false);
  }   
}

function validar_nombre_usuario(string){
  let r = /^([A-Za-z]+[\s]*)+\S$/;
  if (r.test(string)){
    return alert(true);
  }else{
    return alert(false);}
}

function validar_contrasena(string){
  let u =/[^ \t\r\n\f]/;
  if(u.test(string)){
    if (string.length >=6){
      return alert(true);
    }else{
      return alert(false);}
  }else{
    return alert(false);}
}