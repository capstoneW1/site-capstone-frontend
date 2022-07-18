import logo from './logo.svg';
import React from 'react'
import './App.css';
import AboutUs from "./components/AboutUs/AboutUs"
import Footer from "./components/Footer/Footer"

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
        <AboutUs></AboutUs>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
