const express = require("express");
const router = require("./script/rutas");
const app = express();

app.use(express.json());
app.use(router);
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("server on por ", app.get("port"));
});
