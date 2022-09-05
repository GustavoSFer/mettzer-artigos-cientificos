import React, { useContext } from 'react';
import MyContext from '../MyContext/MyContext';

function SelectQuantityPerPage() {
  const { itensPerPage, setItemPerPage } = useContext(MyContext);
  return (
    <select value={itensPerPage} onChange={(e) => setItemPerPage(Number(e.target.value))}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={20}>20</option>
    </select>
  );
}

export default SelectQuantityPerPage;
