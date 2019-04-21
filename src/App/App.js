import React, { Component } from 'react';
import Counters from './components/counters/Counters';
import './App.css';

class App extends Component {


  render() {
      return (
          <div className="App">
              <h1>
                  Busca de Posts
              </h1>

              <div className=''></div>
              <form action="#">
                <input type="text" placeholder='O que procura?' />
                <button className=''>Buscar</button>
              </form>

            <Counters />
          </div>
      );
  }
}

export default App;
