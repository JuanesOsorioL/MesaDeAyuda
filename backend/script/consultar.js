let conexion = require("./conexion");

module.exports = {
  loguin: async (req, res) => {
    const { usuario, contrasena } = req.body;
    conexion.query(
      "select usuario,contrasena,rol,nombre from usuario where usuario=? and contrasena=?",
      [usuario, contrasena],
      (error, rows) => {
        if (!error) {
          if (rows.length != 0) {
            res.json({ estado: "Exitoso", msj: rows[0] });
          } else {
            res.json({ estado: "NUll", msj: "no existe" });
          }
        } else {
          res.json({ estado: "Fallo", msj: error });
        }
      }
    );
  },

  crearusuario: (req, res) => {
    const { nombre, usuario, contrasena, edad, fecha_registro } = req.body;
    conexion.query(
      "INSERT INTO usuario ( nombre, usuario, contrasena, edad, fecha_registro) VALUES (?,?,?,?,?)",
      [nombre, usuario, contrasena, edad, fecha_registro],
      (error, rows) => {
        if (!error) {
          if (rows.affectedRows == 1) {
            let data = { usuario: usuario, contrasena: contrasena, rol: "1" };
            res.json({ estado: "Exitoso", msj: data });
          } else {
            res.json({ estado: "NUll", msj: "no se guardo" });
          }
        } else {
          res.json({ estado: "Fallo", msj: error });
        }
      }
    );
  },

  consultarusuarios: (req, res) => {
    conexion.query("select * from usuario", (error, rows) => {
      if (!error) {
        if (rows.length != 0) {
          res.json({ estado: "Exitoso", msj: rows });
        } else {
          res.json({ estado: "NUll", msj: "no existe" });
        }
      } else {
        res.json({ estado: "Fallo", msj: error });
      }
    });
  },

  ///////////

  consultartickets: (req, res) => {
    conexion.query("select * from ticket", (error, rows) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    });
  },

  consultarunticket: (req, res) => {
    console.log(req.body);
    /* const { id } = req.body;

    conexion.query("select * from ticket where id=?", [id], (error, rows) => {
      if (!error) {
        res.json(rows);
      } else {
        console.log(error);
      }
    }); */
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
