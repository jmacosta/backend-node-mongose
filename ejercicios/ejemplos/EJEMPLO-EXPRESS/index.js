"use strict";
// cargar libreria de express
const express = require("express");
// crear la aplicacion
const app = express();
// añadir una ruta
app.get("/", (request, response, next) => {
  response.send("Hola q tal");
});
app.get("/facturas", (request, response, next) => {
  response.send("<b>hola</b>");
});

// arrancamos el servidor
app.listen(8000, () => {
  console.log("HTTP Server init at http://127.0.0.1:1337");
});
