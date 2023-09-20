"use strict";

function Persona(nombre) {
  this.nombre = nombre;
  //   this.saluda = function () {
  //     console.log("Hola soy", this.nombre);
  //   };
}

const pepe = new Persona("pepe");
const luis = new Persona("Luis");

Persona.prototype.saluda = function () {
  console.log("Hola soy", this.nombre);
};

console.log(pepe);
pepe.saluda();
luis.saluda();

// Herencia simple ------

function Agente(nombre) {
  // Heredaar el constructor
  Persona.call(this, nombre);
  // ejecutar el contrstuctor de Persona con mi this
}
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const smith = new Agente("Smith");
smith.saluda();

// Herencia múltiple

// quiero que los aagentes hereden tanto de persona como de superheroes
function Superheroe() {
  this.vuela = function () {
    console.log(this.nombre, "vuela");
  };
}
Object.assign(Agente.prototype, new Superheroe());

smith.vuela();

console.log(smith);
console.log(Agente.prototype);
console.log(Persona.prototype);
