"use strict";
const readLine = require("node:readline");
const connection = require("./lib/connectMongoose");
const Agente = require("./models/Agente");
const { stdout } = require("node:process");

main().catch((err) => {
  console.log("Hubo un error", err);
});

async function main() {
  await new Promise((resolve) => connection.once("open", resolve));
  const deleteData = await question(
    "Estas seguro de querer borrar todo lo que hay y cargar datos iniciales? despues no llores "
  );
  if (!deleteData) {
    process.exit();
  }
  await initAgentes();
  connection.close();
}

async function initAgentes() {
  // borrar agentes
  const deleted = await Agente.deleteMany();
  console.log(`Killed ${deleted.deletedCount} agents`);
  // crear agentes iniciales
  const inserted = await Agente.insertMany([
    { name: "Jhons", age: 34 },
    { name: "Brown", age: 54 },
    { name: "Smith", age: 23 },
    { name: "Jason", age: 54 },
    { name: "Peter", age: 53 },
  ]);
  console.log(`Created ${inserted.length} agents`);
}

function question(text) {
  return new Promise((resolve, reject) => {
    //conectar con la consola
    const ifc = readLine.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    ifc.question(text, (answer) => {
      ifc.close();
      resolve(answer.toLowerCase() === "si");
    });
  });
}
