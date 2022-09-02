import MyContext from './MyContext/MyContext';
import './App.css';
import Routers from './Routes';
import { useState } from 'react';

function App() {
  const MIN_PASSWORD_LANGTH = 6;
  const [data, setData] = useState([])

  const contextValue = {
    MIN_PASSWORD_LANGTH,
    data, setData,
  }

  return (
    <MyContext.Provider value={contextValue}>
      <div className="App">
        <Routers />
      </div>
    </MyContext.Provider>
  );
}

export default App;
