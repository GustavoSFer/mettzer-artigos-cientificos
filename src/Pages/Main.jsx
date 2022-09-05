import React, { useState, useContext } from 'react';
import RequestApi from '../Service';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Loading from '../Components/Loading';
import MyContext from '../MyContext/MyContext';
import Card from '../Components/Card';
import SelectQuantityPerPage from '../Components/SelectQuantityPerPage';
import Pagination from '../Components/Pagination';

function Main() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    data, setData,
    pages, itensPerPage, setItemPerPage,
    currentItens, setCurrentPage, currentPage,
  } = useContext(MyContext);

  const handleClick = async () => {
    setLoading(true);
    const result = await RequestApi(search);
    setLoading(false);
    setData(result);
    setSearch('');
  };

  return (
    <div className="corpo-color">
      <Header />
      <div className="container">
        <div className="mt-4 container-ver">
          <Input
            type="text"
            name="search"
            handleChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <Button click={handleClick} sty="m-3">Pesquisar</Button>
        </div>
        { loading && <Loading /> }
        <div className="row m-1">
          {
            data.length > 0 && currentItens
              .map((item) => <Card item={item} key={item._source.id} />)
          }
        </div>
      </div>
      <div className="d-flex justify-content-between m-5">
        <div />
        <div>
          <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        <div>
          <span>Quantidade por paginas</span>
          <SelectQuantityPerPage itensPerPage={itensPerPage} setItemPerPage={setItemPerPage} />
        </div>
      </div>
    </div>
  );
}

export default Main;
