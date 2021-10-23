function accion(){
    let usuario=document.getElementById("user").value;
    let contrasena=document.getElementById("clave").value;
    validacion_usuario=validar_usuario(usuario);
    validacion_contrasena=validar_contrasena(contrasena);
    cargar=validacion(validacion_usuario,validacion_contrasena);
    IniciarSesion(cargar,usuario,contrasena);

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
     }else{
      return false;}
  }
  function validacion(Usu,Con){
    if (Usu && Con){
        return true; //aqui se puede retorna que todo esta bien.
    }else{
        console.log(Usu,Con);}
    }

function IniciarSesion(cargar,Usuario,Contrasena){
    if(cargar){
        let entra={
            usuario:Usuario,
            contrasena:Contrasena,
            rol:1};
        console.log(entra); //retornar para la funcion get
        return entra;
    }else{
        alert("Por favor verifique que la contraseña no posea espacios y sea mayor a 6 caracteres");
    }
}