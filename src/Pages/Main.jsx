import React, { useState } from 'react';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';

function Main() {
  const [search, setSearch] = useState('');
  return (
    <div className="container">
      <Header />
      <div className="mt-3 container-ver">
        <Input
          type="text"
          name="search"
          handleChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button sty="m-3">Pesquisar</Button>
      </div>
    </div>
  );
}

export default Main;
