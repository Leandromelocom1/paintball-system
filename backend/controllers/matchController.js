const Match = require('../models/Match');

const createMatch = async (req, res) => {
  const { participants } = req.body;

  try {
    const match = new Match({ participants });
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getMatches = async (req, res) => {
  try {
    const matches = await Match.find({})
      .populate('participants.customer', 'name email')
      .populate('participants.weapon', 'name');
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createMatch, getMatches };
