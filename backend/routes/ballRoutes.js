const express = require('express');
const { addBall, getBalls, updateBallQuantity } = require('../controllers/ballController');
const router = express.Router();

router.post('/', addBall);           // Adicionar nova bolinha
router.get('/', getBalls);           // Obter todas as bolinhas
router.put('/:id', updateBallQuantity); // Atualizar quantidade de bolinha

module.exports = router;
