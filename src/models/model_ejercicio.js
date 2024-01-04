const { Schema, model } = require("mongoose");

const Ejercicio = new Schema({
  nombre: { type: String, required: true },
  series: { type: Number, required: true },
  repeticiones: { type: Number, required: true },
  kilogramos: { type: Number, required: true },
  imagen: { type: String }
});

module.exports = model('Ejercicio', Ejercicio);