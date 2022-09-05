import React from 'react';
import PropTypes from 'prop-types';

function SelectQuantityPerPage({ itensPerPage, setItemPerPage }) {
  return (
    <select value={itensPerPage} onChange={(e) => setItemPerPage(Number(e.target.value))}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
    </select>
  );
}

SelectQuantityPerPage.propTypes = {
  itensPerPage: PropTypes.number.isRequired,
  setItemPerPage: PropTypes.func.isRequired,
};

export default SelectQuantityPerPage;
