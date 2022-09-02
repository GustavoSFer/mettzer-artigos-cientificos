import MyContext from './MyContext/MyContext';
import './App.css';
import Routers from './Routes';

function App() {
  const MIN_PASSWORD_LANGTH = 6;

  const contextValue = {
    MIN_PASSWORD_LANGTH,
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
