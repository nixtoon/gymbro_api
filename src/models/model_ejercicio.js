const { Schema, model } = require("mongoose");

const Ejercicio = new Schema({
  nombre: { type: String, required: true },
  tipo: { type: String, required: true},
  imagen: { type: String }
});

module.exports = model('Ejercicio', Ejercicio);