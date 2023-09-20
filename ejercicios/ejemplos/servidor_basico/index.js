// cargar la libreria http
"use strict";
const http = require("http");
const Chance = require("chance");
const chance = new Chance();
//definir un servidor
const server = http.createServer(function (request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end(`Wake up, <b>${chance.address()}</b>`);
});
// arrancar servidor
server.listen(1337, "127.0.0.1");
console.log("Servidor arrancado en http://127.0.0.1:1337");
