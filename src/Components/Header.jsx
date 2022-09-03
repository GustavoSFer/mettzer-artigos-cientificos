import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagens/logo.png';
import '../Css/Header.css';

function Header() {
  const width = {
    width: '130px',
  };
  return (
    <header className="p-4 border rounded header-color">
      <nav className="d-flex justify-content-between">
        <div style={width}>
          <Link to="/main">
            <img src={logo} alt="logo da empresa" className="w-100" />
          </Link>
        </div>

        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}

export default Header;
