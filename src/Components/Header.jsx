import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="d-flex justify-content-between">
        <Link to="/main">
          <img src="#" alt="logo" />
        </Link>

        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}

export default Header;
