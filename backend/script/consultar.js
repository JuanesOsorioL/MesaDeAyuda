let conexion = require("./conexion");
module.exports = {
  consulta: (req, res) => {
    conexion.query("select * from usuarios", (error, rows) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    });
  },
  actualizar: (req, res) => {
    console.log("actualizar");
  },
  eliminar: (req, res) => {
    console.log("borrar");
  },
  crear: (req, res) => {
    console.log("guardar");
  },
};
