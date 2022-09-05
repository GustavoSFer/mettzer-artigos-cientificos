import React, { useState, useContext } from 'react';
import RequestApi from '../Service';
import Header from '../Components/Header';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Loading from '../Components/Loading';
import MyContext from '../MyContext/MyContext';
import Card from '../Components/Card';

function Main() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    data, setData, pages, currentItens, setCurrentPage,
  } = useContext(MyContext);
  // const [page, setPage] = useState(1);

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
        <div className="row">
          {
            data.length > 0 && currentItens
              .map((item) => <Card item={item} key={item._source.id} />)
          }
        </div>
      </div>
      <div>
        {
          Array.from(Array(pages), (item, index) => (
            <button
              key={index}
              type="button"
              value={index}
              onClick={(e) => setCurrentPage(Number(e.target.value))}
            >
              {index + 1}
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default Main;
