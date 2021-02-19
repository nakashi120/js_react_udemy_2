import logo from './logo.svg';
import './App.css';
import ColorfullMessage from './components/ColorfullMessage';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ayano</h1>
        <ColorfullMessage color="blue">Hello</ColorfullMessage>
        <ColorfullMessage color="pink">World</ColorfullMessage>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
