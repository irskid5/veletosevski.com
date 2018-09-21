import React, { Component } from "react";
import { Helmet } from "react-helmet";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { css } from "emotion";

import "./util/icons.css";

import titleImg from "./media/image1.svg";

const code = "</>";

class App extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          flex-wrap: no-wrap;
          height: 100vh;
          width: 100vw;
          justify-content: center;
        `}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="https://www.veletosevski.com" />
        </Helmet>
        <img src={titleImg} style={{ position: "absolute", zIndex: "0", height: "100vh", width: "100vw" }} alt="Background" />
        <div
          className={css`
            display: flex;
            flex-direction: row;
            flex-wrap: no-wrap;
            justify-content: center;
            position: relative;
            z-index: 10;
          `}
        >
          <div class="block">
            <i class="hovicon effect-1 sub-a"><img src="./media/icons/music-player.svg"/></i>
          </div>
          <div class="block">
            <i class="hovicon effect-1 sub-a">{code}</i>
          </div>
          <div class="block">
            <i class="hovicon effect-1 sub-a"><img src="./media/icons/macedonia.svg"/></i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
