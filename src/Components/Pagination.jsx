import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ pages, currentPage, setCurrentPage }) {
  return (
    <div className="">
      {
        Array.from(Array(pages), (_item, index) => (
          <button
            key={index}
            type="button"
            value={index}
            className="m-1 rounded pe-3 ps-3"
            style={index === currentPage ? { backgroundColor: '#00DB87' } : null}
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
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
