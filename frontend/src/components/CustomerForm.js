import React, { useState } from 'react';
import axios from 'axios';

export const CustomerForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/customers', formData); // Certifique-se de que a URL está correta
      alert('Cliente cadastrado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar cliente');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nome</label>
        <input type="text" className="form-control" name="name" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" name="email" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Telefone</label>
        <input type="text" className="form-control" name="phone" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Endereço</label>
        <input type="text" className="form-control" name="address" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Cadastrar Cliente</button>
    </form>
  );
};
