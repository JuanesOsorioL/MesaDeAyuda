function validar_nombre_usuario(string) {
  if (/^([A-Z][a-z]+[\s]*)+\S$/.test(string)) {
    return true;
  } else {
    return false;
  }
}
