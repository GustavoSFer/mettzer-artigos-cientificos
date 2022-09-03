import MyContext from './MyContext/MyContext';
import './App.css';
import Routers from './Routes';
import { useEffect, useState } from 'react';

function App() {
  const MIN_PASSWORD_LANGTH = 6;
  const [data, setData] = useState([]);
  const [getFavorites, setFavorites] = useState([]);
  const [alter, setAlter] = useState(false);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storage);
  }, []);

  const contextValue = {
    MIN_PASSWORD_LANGTH,
    data, setData,
    getFavorites, setFavorites,
    alter, setAlter,
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
