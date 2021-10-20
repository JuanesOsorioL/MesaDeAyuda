function crear(body) {
  fetch("http://localhost:3000/agregarusuario", {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res2) => console.log(res2.respuesta));
}

function consultar() {
  fetch("http://localhost:3000/index", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res2) => console.log(res2));
}
