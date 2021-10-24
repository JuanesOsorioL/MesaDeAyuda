const express = require("express");
const router = express.Router();

let {
  loguin,
  ////
  consultarusuarios,
  consultartickets,
  consultarunticket,
  crearusuario,
  crearticket,
  actualizarticket,
  cerrarticket,
} = require("./consultar");
router.post("/loguin", loguin);
router.post("/agregarusuario", crearusuario);
router.get("/consultarusuarios", consultarusuarios);
//////

router.get("/consultartickets", consultartickets);
router.post("/consultarunticket", consultarunticket);

router.post("/agregarticket", crearticket);
router.put("/actualizarticket", actualizarticket);
router.put("/cerrarticket", cerrarticket);

module.exports = router;
