"use strict";

// create a function for construct objects

function Fruta(nombre) {
  this.nombre = nombre;
  this.saluda = function () {
    console.log(`Hola soy ${this.nombre}`);
  };
}

const limon = new Fruta("limon");

//limon.saluda();
setTimeout(limon.saluda.bind(limon), 2000);
// const helloOfLimon = limon.saluda.bind(limon);

// helloOfLimon();
