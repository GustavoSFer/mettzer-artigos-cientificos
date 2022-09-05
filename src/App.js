import MyContext from './MyContext/MyContext';
import './App.css';
import Routers from './Routes';
import { useEffect, useState } from 'react';

function App() {
  const MIN_PASSWORD_LANGTH = 6;
  const [data, setData] = useState([]);
  const [getFavorites, setFavorites] = useState([]);
  const [alter, setAlter] = useState(false);
  const [itensPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(data.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = data.slice(startIndex, endIndex);

  const addLocalStorage = (add) => {
    setAlter(!alter);
    const storage = JSON.parse(localStorage.getItem('favorites')) || [];

    const newItem = storage.filter(({ id }) => id !== add._source.id);
    const objFavorite = {
      id: add._source.id,
      title: add._source.title,
      description: add._source.description,
    };
    localStorage.setItem('favorites', JSON.stringify([...newItem, objFavorite]));
  };

  const removeLocalStorage = (add) => {
    setAlter(!alter);
    const storage = JSON.parse(localStorage.getItem('favorites')) || [];

    const newFavorites = storage.filter(({ id }) => id !== add._source.id);
    localStorage.setItem('favorites', JSON.stringify([...newFavorites]));
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storage);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itensPerPage]);

  const contextValue = {
    MIN_PASSWORD_LANGTH,
    data, setData,
    getFavorites, setFavorites,
    addLocalStorage, removeLocalStorage,
    alter,
    pages, itensPerPage,
    currentItens, setCurrentPage,
    setItemPerPage,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <div className="App">
        <Routers />
      </div>
    </MyContext.Provider>
  );
}

export default App;
