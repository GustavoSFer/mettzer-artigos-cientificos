import React, { useContext } from 'react';
import CardFavorites from '../Components/CardFavotites';
import Header from '../Components/Header';
import MyContext from '../MyContext/MyContext';
// import Button from '../Components/Button';
// import coracao2 from '../imagens/coracao2.png';

function Favoritos() {
  const {
    getFavorites,
    // removeLocalStorage,
  } = useContext(MyContext);

  return (
    <div className="container">
      <Header />
      <div className="mt-4">
        {
          getFavorites.length > 0
            ? getFavorites.map((item) => <CardFavorites item={item} key={item.id} />)
            : <h1 className="mt-5">Não possui favoritos!</h1>
        }
      </div>
    </div>
  );
}

export default Favoritos;
