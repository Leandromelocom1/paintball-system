const Ball = require('../models/Ball');

// Função para criar uma nova entrada de bolinha no sistema
const addBall = async (req, res) => {
  const { type, brand, quantity, minQuantity } = req.body;

  try {
    const ball = new Ball({ type, brand, quantity, minQuantity });
    await ball.save();
    res.status(201).json(ball);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Função para buscar todas as bolinhas do estoque
const getBalls = async (req, res) => {
  try {
    const balls = await Ball.find({});
    res.json(balls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualiza a quantidade de bolinhas (saída ou retorno)
const updateBallQuantity = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const ball = await Ball.findById(id);
    if (!ball) return res.status(404).json({ message: 'Bolinha não encontrada' });

    ball.quantity = quantity;
    await ball.save();
    res.json(ball);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addBall, getBalls, updateBallQuantity };
