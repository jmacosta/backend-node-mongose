const mongoose = require("mongoose");

// definir el esquema de los agentes
const agenteSchema = mongoose.Schema(
  {
    name: { type: String, index: true },
    age: { type: Number, index: true },
  },
  {
    collection: "agentes",
  }
);
//Tipo de métodos:
// Estatico

agenteSchema.statics.lista = function (filtro, skip, limit, sort, fields) {
  const query = Agente.find(filtro);
  //devuelve un objeto de tipo query q es un thenable
  query.skip(skip);
  query.limit(limit);
  query.sort(sort);
  query.select(fields);
  return query.exec();
};

// método de instancia

agenteSchema.methods.saluda = function () {
  console.log("Hola soy el agente " + this.name);
};

// crear el modelo de agente

const Agente = mongoose.model("Agente", agenteSchema);

// exportar el modelo de agente (opcional)
module.exports = Agente;
