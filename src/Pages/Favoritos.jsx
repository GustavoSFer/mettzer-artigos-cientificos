import React, { useContext, useState } from 'react';
import CardFavorites from '../Components/CardFavotites';
import Header from '../Components/Header';
import MyContext from '../MyContext/MyContext';
import Pagination from '../Components/Pagination';
import SelectQuantityPerPage from '../Components/SelectQuantityPerPage';

// import Button from '../Components/Button';
// import coracao2 from '../imagens/coracao2.png';

function Favoritos() {
  const {
    getFavorites,
  } = useContext(MyContext);

  const [itensPerPage, setItemPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(getFavorites.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = getFavorites.slice(startIndex, endIndex);

  return (
    <div className="corpo-color">
      <Header />
      <div className="container">
        <div className="mt-4">
          {
            getFavorites.length > 0
              ? currentItens.map((item) => <CardFavorites item={item} key={item.id} />)
              : <h1 className="mt-5">Não possui favoritos!</h1>
          }
        </div>

        <div className="d-flex justify-content-evenly m-5">
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
    </div>
  );
}

export default Favoritos;
