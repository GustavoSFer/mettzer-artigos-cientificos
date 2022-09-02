import MyContext from './MyContext/MyContext';
import './App.css';
import Routers from './Routes';

function App() {
  const contextValue = {}
  return (
    <MyContext.Provider value={contextValue}>
      <div className="App">
        <Routers />
      </div>
    </MyContext.Provider>
  );
}

export default App;
