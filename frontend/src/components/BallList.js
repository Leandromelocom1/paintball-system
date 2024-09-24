import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const BallList = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const fetchBalls = async () => {
      const { data } = await axios.get('/api/balls');
      setBalls(data);
    };
    fetchBalls();
  }, []);

  return (
    <div>
      <h3>Bolinhas no Estoque</h3>
      <ul className="list-group">
        {balls.map((ball) => (
          <li key={ball._id} className="list-group-item">
            {ball.type} - {ball.brand} - Quantidade: {ball.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};
