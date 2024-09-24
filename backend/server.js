const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Conecta ao MongoDB
connectDB();

// Inicializa o aplicativo Express
const app = express();

// Configura o middleware de CORS e JSON
app.use(cors());
app.use(express.json());

// Rota básica para testar a API
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Importa e utiliza as rotas de clientes
const customerRoutes = require('./routes/customerRoutes');
app.use('/api/customers', customerRoutes);

// Define a porta do servidor a partir do .env ou usa 5000 como padrão
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
