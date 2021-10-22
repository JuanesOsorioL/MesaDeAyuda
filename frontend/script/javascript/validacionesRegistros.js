function accion(){
  let usuario=document.getElementById("dato_nombre_usuario").value;
  let edad=document.getElementById("dato_edad_usuario").value;
  let nombre=document.getElementById("dato_nombre_completo").value;
  let contrasena=document.getElementById("dato_contrasena").value;
  validacion_nombre=validar_usuario(nombre);
  validacion_usuario=validar_usuario(usuario);
  validacion_edad=validar_edad_usuario(edad);
  validacion_contrasena=validar_contrasena(contrasena);
  validacion(validacion_nombre,validacion_usuario,validacion_edad,validacion_contrasena);}

function validar_edad_usuario(edad) {
  if (/^([0-9])+$/.test(edad)) {
    if (edad>=0 && edad >13 && edad <110) {
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }   
}

function validar_usuario(string){
  let r = /^([A-Za-z]+[\s]*)+\S$/;
  if (r.test(string)){
    return true;
  }else{
    return false;}
}

function validar_contrasena(string){
  let r =/[ \t\r\n\f]/;
  if (string.length>=6){
    if(r.test(string)){
      return false;
    }else{
      return true;}
   }
  else{
    return false;}
}
function validacion(Non,Usu,Eda,Con){
  console.log(Non,Usu,Eda,Con);
  if (Non && Usu && Eda && Con){
    return console.log(Non,Usu,Eda,Con) //aqui se puede retorna que todo esta bien-, y usar crear otra funcion para pasr obejtos al fecth.
  }if(Eda===false && Con===false){
    return alert("Por favor verifique que la edad sea correcta.\nPor favor verifique que la contraseña no posea espacios y sea mayor a 6 caracteres");
  }if(Eda===false){
    return alert("Por favor verifique que la edad sea correcta");
  }if(Con===false){
    return alert("Por favor verifique que la contraseña no posea espacios y sea mayor a 6 caracteres");}
}
