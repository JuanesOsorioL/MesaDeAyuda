const mysql = require("mysql2");

let conexion = mysql.createConnection({
  host: "localhost",
  database: "MA",
  user: "root",
  password: "root",
});

conexion.connect((err) => {
  if (err) {
    console.error("Error de conexion: " + err.stack);
    return;
  }
  console.log("Conectado con el identificador " + conexion.threadId);
});
module.exports = conexion;
