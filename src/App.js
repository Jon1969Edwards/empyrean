import logo from './images/eclanding.png';
import welcome from './images/welcomeSign.png';
import './App.css';


function App() {
  return (
    // <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            
          </p>
          <a
            className="App-link"
            href="http://www.empyrean.meleeconvergent.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={welcome} className="App-link" alt="welcome" />
          </a>
        </header>
      </div>
    // </div>
  );
}

export default App;
