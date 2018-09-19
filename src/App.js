import React, { Component } from "react";
import { css } from "emotion";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import titleImg from "./media/image1.svg";

class App extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          flex-wrap: no-wrap;
          height: 100vh;
        `}
      >
        <img src={titleImg} alt="Image of Vele speaking" />
      </div>
    );
  }
}

export default App;
