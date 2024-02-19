import { useState } from 'react';
import './App.css';
import Navbar from "./components/Project1/Navbar";
import TextArea from "./components/Project1/TextArea"

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
*/

/*
let name = "M.H.A"
function App() {
  return (
    <div className="blank">
      <div>
        <h1 >Let's Get Started?</h1>
        <h1>{name}!</h1>
        <div>
          <input type="checkbox" name="" id="" />Yes
        </div>

        <div>
          <input type="checkbox" name="" id="" />No
        </div>
      </div>
    </div>
  );
}
*/

function App() {
  return (
    <>
      <Navbar name="TextExpert" about="Nothing ABout us"></Navbar>
      <div className="container">
        <TextArea></TextArea>
      </div>
    </>
  );
}

export default App;
