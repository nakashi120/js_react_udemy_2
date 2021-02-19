import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import ColorfullMessage from './components/ColorfullMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ayano</h1>
        <ColorfullMessage color="blue">Hello</ColorfullMessage>
        <ColorfullMessage color="pink">World</ColorfullMessage>
        <button onClick={onClickCountUp}>カウントアップ</button>
        <p>{num}</p>
        <br />
        <button onClick={onClickSwitchShowFlag}>on/off</button>
        {faceShowFlag && <p>＼(^o^)／</p>}
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
