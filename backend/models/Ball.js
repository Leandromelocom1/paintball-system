const mongoose = require('mongoose');

const ballSchema = mongoose.Schema({
  type: { type: String, required: true },    // Ex: tamanho ou cor da bolinha
  brand: { type: String, required: true },   // Ex: marca
  quantity: { type: Number, required: true },// Quantidade no estoque
  minQuantity: { type: Number, default: 100 }, // Quantidade mínima
}, {
  timestamps: true,
});

const Ball = mongoose.model('Ball', ballSchema);

module.exports = Ball;
