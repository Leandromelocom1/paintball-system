import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CustomerForm } from './components/CustomerForm';
import { WeaponForm } from './components/WeaponForm';
import { MatchForm } from './components/MatchForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => <div><h2>Home</h2><p>Bem-vindo ao sistema de paintball!</p></div>;
const Balance = () => <div><h2>Saldo</h2><p>Controle de saldo de clientes.</p></div>;
const Reports = () => <div><h2>Relatórios</h2><p>Relatórios de uso de bolinhas e consumo.</p></div>;

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Paintball System</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cadastro-cliente">Cadastro de Cliente</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/armas">Armas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/partida">Partida</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/saldo">Saldo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/relatorios">Relatórios</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro-cliente" element={<CustomerForm />} />
          <Route path="/armas" element={<WeaponForm />} />
          <Route path="/partida" element={<MatchForm />} />
          <Route path="/saldo" element={<Balance />} />
          <Route path="/relatorios" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
