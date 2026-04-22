const mongoose = require('mongoose');

const contadorSchema = new mongoose.Schema({
  clics: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Contador = mongoose.model('Contador', contadorSchema);

module.exports = Contador;