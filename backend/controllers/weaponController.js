const Weapon = require('../models/Weapon');

// Controlador para adicionar uma nova arma
const addWeapon = async (req, res) => {
  const { name, maintenanceDate, ammunition, purchaseDate, value } = req.body;

  try {
    // Verifica se todos os campos obrigatórios estão presentes
    if (!name || !maintenanceDate || !ammunition || !purchaseDate || !value) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    // Cria um novo documento de arma no banco de dados
    const newWeapon = new Weapon({
      name,
      maintenanceDate,
      ammunition,
      purchaseDate,
      value,
    });

    const savedWeapon = await newWeapon.save(); // Salva a arma no MongoDB
    return res.status(201).json(savedWeapon); // Retorna a arma criada

  } catch (error) {
    console.error('Erro ao adicionar arma:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
};

// Controlador para obter todas as armas
const getWeapons = async (req, res) => {
  try {
    const weapons = await Weapon.find(); // Busca todas as armas no banco de dados
    return res.status(200).json(weapons); // Retorna as armas encontradas
  } catch (error) {
    console.error('Erro ao buscar armas:', error);
    return res.status(500).json({ message: 'Erro ao buscar armas.' });
  }
};

module.exports = {
  addWeapon,
  getWeapons,
};
