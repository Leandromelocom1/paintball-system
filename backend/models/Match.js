const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  participants: [
    {
      customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
      },
      weapon: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Weapon',
        required: true
      }
    }
  ],
  date: { type: Date, required: true, default: Date.now },
}, {
  timestamps: true,
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
