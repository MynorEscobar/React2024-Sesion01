import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import ComponenteDos from './ComponenteDos';
import { EventosComponentes } from './EventosComponentes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
          <MiComponente></MiComponente>
          <ComponenteDos></ComponenteDos> 
          <EventosComponentes></EventosComponentes> 
      </header>
      <p>
        
      </p>
    </div>

  );
}

export default App;
