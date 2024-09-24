const mongoose = require('mongoose');

const weaponSchema = mongoose.Schema({
  name: { type: String, required: true },
  maintenanceDate: { type: Date, required: true },
  ammunition: { type: String, required: true },
  purchaseDate: { type: Date, required: true },
  value: { type: Number, required: true }
}, {
  timestamps: true,
});

const Weapon = mongoose.model('Weapon', weaponSchema);

module.exports = Weapon;
