const Customer = require('../models/Customer');

// Função para adicionar um novo cliente
const addCustomer = async (req, res) => {
  const { name, email, phone, address } = req.body;
  try {
    const newCustomer = new Customer({ name, email, phone, address });
    const savedCustomer = await newCustomer.save();
    return res.status(201).json(savedCustomer);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// Função para obter todos os clientes
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addCustomer,
  getCustomers,
};
