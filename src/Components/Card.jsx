import React from 'react';
import PropTypes from 'prop-types';

function Card({ item }) {
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
      // authors: PropTypes.arrayOf(PropTypes.string),
      // urls: PropTypes.arrayOf,
    }),
  }).isRequired,
};

export default Card;
