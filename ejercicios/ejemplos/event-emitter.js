"use strict";
const EventEmitter = require("events");
const emisor = new EventEmitter();
emisor.on("Llamada de telefono", function () {
  console.log("ring ring");
});

emisor.once("Llamada de telefono", function () {
  console.log("brr brr");
});

emisor.on("Llamada de telefono", function (quienLlama) {
  if (quienLlama === "padre") {
    return;
  }
  console.log("ring ring");
});

emisor.once("Llamada de telefono", function (quienLlama) {
  console.log("brr brr");
});

emisor.emit("Llamada de telefono", "padre");
