<<<<<<< HEAD
=======
let conexion = require("./conexion");

module.exports = {
  consultarusuarios: (req, res) => {
    conexion.query("select * from usuario", (error, rows) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    });
  },

  consultartickets: (req, res) => {
    conexion.query("select * from ticket", (error, rows) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    });
  },

  loguin: (req, res) => {
    const { usuario, contrasena } = req.body;
    conexion.query(
      "select * from usuario where usuario=? and contrasena=?",
      [usuario, contrasena],
      (error, rows) => {
        if (!error) {
          res.json(rows);
        } else {
          console.log(error);
        }
      }
    );
  },

  consultarunticket: (req, res) => {
    const { id } = req.body;
    conexion.query("select * from ticket where id=?", [id], (error, rows) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    });
  },

  crearusuario: (req, res) => {
    const { nombre, usuario, contrasena, edad, fecha_registro } = req.body;
    conexion.query(
      "INSERT INTO usuario ( nombre, usuario, contrasena, edad, fecha_registro) VALUES (?,?,?,?,?)",
      [nombre, usuario, contrasena, edad, fecha_registro],
      (error, rows) => {
        if (!error) {
          res.json(rows);
        } else {
          console.log(error);
        }
      }
    );
  },

  crearticket: (req, res) => {
    const { usuario, solicitud, fecha_inicio } = req.body;
    conexion.query(
      "INSERT INTO ticket ( usuario, solicitud, fecha_inicio_requerimiento) VALUES (?,?,?)",
      [usuario, solicitud, fecha_inicio],
      (error, rows) => {
        if (!error) {
          res.json(rows);
        } else {
          console.log(error);
        }
      }
    );
  },

  actualizarticket: (req, res) => {
    const { id, solicitud } = req.body;
    conexion.query(
      "UPDATE ticket SET solicitud=? where id = ?",
      [solicitud, id],
      (error, rows) => {
        if (!error) {
          res.json(rows);
        } else {
          console.log(error);
        }
      }
    );
  },

  cerrarticket: (req, res) => {
    const { id, solicitud, fecha_cierre } = req.body;
    conexion.query(
      "UPDATE ticket SET solicitud=?, fecha_cierre_requerimiento=?, estado=2 where id = ?",
      [solicitud, fecha_cierre, id],
      (error, rows) => {
        if (!error) {
          res.json(rows);
        } else {
          console.log(error);
        }
      }
    );
  },
};
>>>>>>> 8c28256e54ac480d811e977acd227bedd432ad38
