import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Route, NavLink, Switch } from "react-router-dom";
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
import UnderCons from "./components/UnderCons";

const Main = () => (
  <div className={"mainscreen fadeIn"}>
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
    <img src={logo} style={{ zIndex: "20", width: "24vw", height: "24vh" }} />
    <div className={"centralButtons fadeIn"}>
      <div className="block">
        <NavLink to="/music">
          <i className="hovicon effect-1 sub-a">
            <FaMusic />
          </i>
        </NavLink>
      </div>
      <div className="block">
        <NavLink to="/coding">
          <i className="hovicon effect-1 sub-a">
            <FaCode />
          </i>
        </NavLink>
      </div>
      <div className="block">
        <NavLink to="/macedonia">
          <i className="hovicon effect-1 sub-a">
            <b className="icon-macedonia" />
          </i>
        </NavLink>
      </div>
    </div>
  </div>
);

const Status = ({ code, children }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }}
  />
);

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/music" component={UnderCons} />
          <Route path="/coding" component={UnderCons} />
          <Route path="/macedonia" component={UnderCons} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
