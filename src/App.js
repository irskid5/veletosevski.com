import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { css } from "emotion";
import Slideshow from "react-slidez";
import Favicon from "react-favicon";

import { FaMusic } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

import "./App.css";
import "./util/icons.css";

import logo from "./media/vele-logo.svg";
import slide1 from "./media/slide1.jpg";
import slide2 from "./media/slide2.jpg";
import slide3 from "./media/slide3.jpg";
import slide4 from "./media/slide4.jpg";
import "./media/icons/macedonia/css/fontello.css";

class App extends Component {
  render() {
    return (
      <div className={"mainscreen fadeIn"}>
        <Favicon url={[logo]} />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vele Tosevski</title>
          <link rel="canonical" href="https://www.veletosevski.com" />
        </Helmet>
        <Slideshow
          showIndex={false}
          showArrows={false}
          autoplay
          enableKeyboard={false}
          slideInterval={10000}
          defaultIndex={0}
          slides={[slide1, slide2, slide3, slide4]}
          effect={"fade"}
          height={"100%"}
          width={"100%"}
        />
        <img src={logo} style={{ zIndex: "20", width: "20vw", height: "30vh" }} />
        <div className={"centralButtons fadeIn"}>
          <div class="block">
            <i class="hovicon effect-1 sub-a">
              <FaMusic />
            </i>
          </div>
          <div class="block">
            <i class="hovicon effect-1 sub-a">
              <FaCode />
            </i>
          </div>
          <div class="block">
            <i class="hovicon effect-1 sub-a">
              <b class="icon-macedonia" />
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
