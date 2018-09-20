import React, { Component } from "react";
import { Helmet } from "react-helmet";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { css } from "emotion";

import "./util/icons.css";

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
          width: 100vh;
          justify-content: center;
        `}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="https://www.veletosevski.com" />
        </Helmet>
        <img src={titleImg} />
        <div
          className={css`
            display: flex;
            flex-direction: row;
            flex-wrap: no-wrap;
            justify-content: center;
            position: absolute;
          `}
        >
          <div class="block">
            <i class="hovicon effect-1 sub-a">IO</i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
