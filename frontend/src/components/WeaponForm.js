import React, { useState } from 'react';
import axios from 'axios';

export const WeaponForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    maintenanceDate: '',
    ammunition: '',
    purchaseDate: '',
    value: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Função para lidar com mudanças no formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reseta o erro ao iniciar o envio
    try {
      const response = await axios.post('http://localhost:5000/api/weapons', formData); // Atualize a URL conforme necessário
      alert('Arma cadastrada com sucesso!');
      console.log('Weapon added:', response.data);
      setFormData({
        name: '',
        maintenanceDate: '',
        ammunition: '',
        purchaseDate: '',
        value: ''
      }); // Reseta o formulário após o sucesso
    } catch (err) {
      setError('Erro ao cadastrar arma. Tente novamente.');
      console.error('Erro ao cadastrar arma:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Cadastro de Arma</h3>
      
      <div className="form-group">
        <label>Nome da Arma</label>
        <input 
          type="text" 
          className="form-control" 
          name="name" 
          value={formData.name}
          onChange={handleChange} 
          required
        />
      </div>

      <div className="form-group">
        <label>Data de Manutenção</label>
        <input 
          type="date" 
          className="form-control" 
          name="maintenanceDate" 
          value={formData.maintenanceDate}
          onChange={handleChange} 
          required
        />
      </div>

      <div className="form-group">
        <label>Tipo de Munição</label>
        <input 
          type="text" 
          className="form-control" 
          name="ammunition" 
          value={formData.ammunition}
          onChange={handleChange} 
          required
        />
      </div>

      <div className="form-group">
        <label>Data de Compra</label>
        <input 
          type="date" 
          className="form-control" 
          name="purchaseDate" 
          value={formData.purchaseDate}
          onChange={handleChange} 
          required
        />
      </div>

      <div className="form-group">
        <label>Valor</label>
        <input 
          type="number" 
          className="form-control" 
          name="value" 
          value={formData.value}
          onChange={handleChange} 
          required
        />
      </div>

      {error && <p className="text-danger">{error}</p>} {/* Exibe mensagem de erro */}

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Cadastrando...' : 'Cadastrar Arma'}
      </button>
    </form>
  );
};
