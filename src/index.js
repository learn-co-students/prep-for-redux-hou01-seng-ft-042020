import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Header from './Header'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
