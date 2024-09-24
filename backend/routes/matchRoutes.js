const express = require('express');
const { createMatch, getMatches } = require('../controllers/matchController');
const router = express.Router();

router.post('/', createMatch);  // Rota para criar uma nova partida
router.get('/', getMatches);    // Rota para obter todas as partidas

module.exports = router;
