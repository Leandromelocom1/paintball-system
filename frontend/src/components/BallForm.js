import React, { useState } from 'react';
import axios from 'axios';

export const BallForm = () => {
  const [formData, setFormData] = useState({ type: '', brand: '', quantity: 0, minQuantity: 100 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/balls', formData);
      alert('Bolinha adicionada com sucesso!');
    } catch (error) {
      alert('Erro ao adicionar bolinha');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Tipo</label>
        <input type="text" className="form-control" name="type" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Marca</label>
        <input type="text" className="form-control" name="brand" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Quantidade</label>
        <input type="number" className="form-control" name="quantity" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Adicionar Bolinha</button>
    </form>
  );
};
