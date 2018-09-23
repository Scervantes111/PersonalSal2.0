import React, { Component } from "react";
import Header from './container/header/header';
import Body from './container/body/body';

import "../common/main.css";

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default Homepage;
