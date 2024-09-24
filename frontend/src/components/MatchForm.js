import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const MatchForm = () => {
  const [customers, setCustomers] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [participants, setParticipants] = useState([
    { customer: '', weapon: '' }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customersResponse = await axios.get('http://localhost:5000/api/customers');
        const weaponsResponse = await axios.get('http://localhost:5000/api/weapons');
        setCustomers(customersResponse.data);
        setWeapons(weaponsResponse.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, []);

  const handleParticipantChange = (index, field, value) => {
    const newParticipants = [...participants];
    newParticipants[index][field] = value;
    setParticipants(newParticipants);
  };

  const addParticipant = () => {
    setParticipants([...participants, { customer: '', weapon: '' }]);
  };

  const removeParticipant = (index) => {
    const newParticipants = participants.filter((_, i) => i !== index);
    setParticipants(newParticipants);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/matches', { participants });
      alert('Partida criada com sucesso!');
    } catch (error) {
      alert('Erro ao criar partida');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Participantes da Partida</h3>
      {participants.map((participant, index) => (
        <div key={index} className="participant">
          <div className="form-group">
            <label>Cliente</label>
            <select
              className="form-control"
              value={participant.customer}
              onChange={(e) => handleParticipantChange(index, 'customer', e.target.value)}
              required
            >
              <option value="">Selecione um cliente</option>
              {customers.map((customer) => (
                <option key={customer._id} value={customer._id}>
                  {customer.name} ({customer.email})
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Arma</label>
            <select
              className="form-control"
              value={participant.weapon}
              onChange={(e) => handleParticipantChange(index, 'weapon', e.target.value)}
              required
            >
              <option value="">Selecione uma arma</option>
              {weapons.map((weapon) => (
                <option key={weapon._id} value={weapon._id}>
                  {weapon.name}
                </option>
              ))}
            </select>
          </div>
          <button type="button" className="btn btn-danger" onClick={() => removeParticipant(index)}>
            Remover Participante
          </button>
          <hr />
        </div>
      ))}
      <button type="button" className="btn btn-secondary" onClick={addParticipant}>
        Adicionar Participante
      </button>
      <br /><br />
      <button type="submit" className="btn btn-primary">Criar Partida</button>
    </form>
  );
};
