function accion(){
  let usuario=document.getElementById("dato_nombre_usuario").value;
  let edad=document.getElementById("dato_edad_usuario").value;
  let nombre=document.getElementById("dato_nombre_completo").value;
  let contrasena=document.getElementById("dato_contrasena").value;
  cargar=validacion(validar_usuario(nombre),validar_usuario(usuario),validar_edad_usuario(edad),validar_contrasena(contrasena));
  IniciarSesion(cargar,nombre,usuario,edad,contrasena);}
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
  if (Non && Usu && Eda && Con){
    return true; //aqui se puede retorna que todo esta bien
  }if(Eda===false && Con===false){
    console.log(Non,Usu,Eda,Con);
    alert("Por favor verifique que la edad sea correcta.\nPor favor verifique que la contraseña no posea espacios y sea mayor a 6 caracteres");
  }else if(Eda===false){
    console.log(Non,Usu,Eda,Con);
    alert("Por favor verifique que la edad sea correcta");
  }else if(Con===false){
    console.log(Non,Usu,Eda,Con);
    alert("Por favor verifique que la contraseña no posea espacios y sea mayor a 6 caracteres");}
}
function IniciarSesion(cargar,Nombre,Usuario,Edad,Contrasena){
  if(cargar){
      let entra={
        nombre:Nombre,
        usuario:Usuario,
        contrasena:Contrasena,
        edad:Edad,
        rol:1};
      console.log(entra); //retornar para la funciono get
      return entra;
  }else{
    console.log("falló conexion con base de datos")
  }
}