import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { css } from "emotion";

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="https://veletosevski.com" />
        </Helmet>
        <img src={titleImg} alt="Image of Vele speaking" />
      </div>
    );
  }
}

export default App;
