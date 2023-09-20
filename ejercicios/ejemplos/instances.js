"use strict";

// create a function for construct objects

function Fruta(nombre) {
  this.nombre = nombre;
  this.saluda = function () {
    console.log(`Hola soy ${nombre}`);
  };
}

const limon = new Fruta("limon");

console.log(limon);
limon.saluda();
