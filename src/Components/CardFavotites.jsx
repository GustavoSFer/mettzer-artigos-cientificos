import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import coracao2 from '../imagens/coracao2.png';
import MyContext from '../MyContext/MyContext';

function CardFavorites({ item }) {
  const { setFavorites } = useContext(MyContext);
  const [alter, setAlter] = useState(false);
  const remover = () => {
    setAlter(true);
    const storage = JSON.parse(localStorage.getItem('favorites')) || [];

    const newFavorites = storage.filter(({ id }) => id !== item.id);
    localStorage.setItem('favorites', JSON.stringify([...newFavorites]));
  };

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
  }, [alter]);

  const width = {
    width: '100%',
  };
  return (
    <div className="card col-3 m-2" style={width}>
      <div className="card-body">
        <Link to={`/detais/${item.id}`} className="text-decoration-none">
          <h5 className="card-title text-body">{item.title}</h5>
          <h6 className="card-subtitle mt-4 text-muted">
            {item.description}
          </h6>
        </Link>

        <div className="text-end">
          <Button click={() => remover(item)}>
            <img src={coracao2} alt="favoritar" />
          </Button>
        </div>
      </div>
    </div>
  );
}

CardFavorites.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default CardFavorites;
