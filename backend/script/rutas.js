const express = require("express");
const router = express.Router();
let {
  consultarusuarios,
  consultartickets,
  loguin,
  consultarunticket,
  crearusuario,
  crearticket,
  actualizarticket,
  cerrarticket,
} = require("./consultar");
router.get("/consultarusuarios", consultarusuarios);
router.get("/consultartickets", consultartickets);
router.post("/loguin", loguin);
router.post("/consultarunticket", consultarunticket);
router.post("/agregarusuario", crearusuario);
router.post("/agregarticket", crearticket);
router.put("/actualizarticket", actualizarticket);
router.put("/cerrarticket", cerrarticket);

module.exports = router;
