import React from 'react';
import PropTypes from 'prop-types';

function SelectQuantityPerPage({ itensPerPage, setItemPerPage }) {
  return (
    <select
      className="form-select text-center"
      value={itensPerPage}
      onChange={(e) => setItemPerPage(Number(e.target.value))}
    >
      <option value={6}>6</option>
      <option value={9}>9</option>
      <option value={18}>18</option>
    </select>
  );
}

SelectQuantityPerPage.propTypes = {
  itensPerPage: PropTypes.number.isRequired,
  setItemPerPage: PropTypes.func.isRequired,
};

export default SelectQuantityPerPage;
