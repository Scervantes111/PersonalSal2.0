import React, { Component } from 'react';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My portfolio</h1>
        </header>
        <p className="App-intro">
          This is a short introduction about me.
        </p>
      </div>
    );
  }
}

export default Homepage;
