import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ pages, setCurrentPage }) {
  return (
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
  );
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
