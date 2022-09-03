import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import coracao1 from '../imagens/coracao1.png';
import coracao2 from '../imagens/coracao2.png';
import Button from './Button';
import MyContext from '../MyContext/MyContext';

function Card({ item }) {
  const {
    getFavorites,
    setFavorites,
    addLocalStorage,
    removeLocalStorage,
    alter,
  } = useContext(MyContext);

  const isFavorite = getFavorites.some(({ id }) => id === item._source.id);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
  }, [alter]);

  const width = {
    width: '25em',
  };

  return (
    <div className="card col-3 m-2" style={width}>
      <div className="card-body">
        <p className="text-start">
          type:
          <span>
            {` ${item._type}`}
          </span>
        </p>
        <h5 className="card-title">{item._source.title}</h5>
        <h6 className="card-subtitle mt-4 text-muted">
          {item._source.description}
        </h6>
        <p className="text-end mt-2">Continuar lendo...</p>
        <p className="card-text">
          {/* { item._source.authors.map((author) => <p>{author}</p>) } */}
        </p>
        {/* <a href="1" className="card-link" _blank>{item._source.urls}</a> */}

        <div className="text-end">
          <Button click={() => (isFavorite ? removeLocalStorage(item) : addLocalStorage(item))}>
            <img src={isFavorite ? coracao2 : coracao1} alt="favoritar" />
          </Button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    _type: PropTypes.string,
    _source: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      // authors: PropTypes.arrayOf(PropTypes.string),
      // urls: PropTypes.arrayOf,
    }),
  }).isRequired,
};

export default Card;
