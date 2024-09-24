const express = require('express');
const { addCustomer, getCustomers } = require('../controllers/customerController');

const router = express.Router();

// Rota para adicionar um novo cliente
router.post('/', addCustomer);

// Rota para obter todos os clientes
router.get('/', getCustomers);

module.exports = router;
