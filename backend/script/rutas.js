const express = require("express");
const router = express.Router();

let { consulta, eliminar, actualizar, crear } = require("./consultar");

router.get("/consultarclientes", consulta);
router.get("/consultartickets", consulta);

router.post("/agregarusuario", crear);
router.post("/agregarticket", crear);

router.delete("/eliminarticket", eliminar);
router.put("/actualizarticket", actualizar);

module.exports = router;
