import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Proba from "./components/Proba.js";
import SearchCar from "./components/SearchCar.js";

const allcars = [
    {"plate":"ABC-123","manufacturer":"Ford","model":"Focus","year":2012,"horsepower":101},
    {"plate":"BBB-123","manufacturer":"Toyota","model":"Yaris","year":2013,"horsepower":102},
    {"plate":"CCC-123","manufacturer":"Opel","model":"Asra","year":2014,"horsepower":103}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome to React</h2>

            <SearchCar cars={allcars}/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
