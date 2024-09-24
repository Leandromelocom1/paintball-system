const express = require('express');
const { addWeapon, getWeapons } = require('../controllers/weaponController');
const router = express.Router();

router.post('/', addWeapon);  // Rota para adicionar arma
router.get('/', getWeapons);  // Rota para obter armas

module.exports = router;
