const express = require("express");
const router = require("./script/rutas");
const app = express();
const cors = require("cors");

app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(app.get("port"), () => {
  console.log("server on por ", app.get("port"));
});
/* vane.vrb@gmail.com */
