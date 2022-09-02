import React, { useState } from 'react';
import RequestApi from '../Service';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';

function Main() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const handleClick = () => {
    console.log('clicado');
    RequestApi(search, page);
    console.log(setPage);
  };

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
        <Button click={handleClick} sty="m-3">Pesquisar</Button>
      </div>
    </div>
  );
}

export default Main;
