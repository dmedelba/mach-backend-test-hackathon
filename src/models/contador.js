const mongoose = require('mongoose');

const contadorSchema = new mongoose.Schema({
  valor: { type: Number, default: 0 },
});

const Contador = mongoose.model('Contador', contadorSchema);

module.exports = Contador;