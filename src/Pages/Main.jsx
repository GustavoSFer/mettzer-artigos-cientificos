import React, { useState, useContext } from 'react';
import RequestApi from '../Service';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Loading from '../Components/Loading';
import MyContext from '../MyContext/MyContext';

function Main() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const { data, setData } = useContext(MyContext);
  // const [page, setPage] = useState(1);

  const handleClick = async () => {
    setLoading(true);
    const result = await RequestApi(search);
    console.log(result);
    setLoading(false);
    setData(result);
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
      { loading && <Loading /> }
      <div>
        { data.length > 0 && <h1>tem</h1> }
      </div>
    </div>
  );
}

export default Main;
