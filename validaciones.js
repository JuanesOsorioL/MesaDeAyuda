let boton=document.getElementById("enviar");
boton.addEventListener("click",function () {
    let edad=document.getElementById("dato_edad_usuario").value;
    validar_edad_usuario(edad);   
});

function validar_edad_usuario(edad) {
  edad=Number(edad);
  if (edad>0 && edad>=13 && edad<=110){
    console.log(edad);
  }else{
    alert("La edad no es válida",edad);
  }
}