import React, { Component } from "react";
import Nav from "./Components/Nav";
import Feed from "./Components/Feed";
import Aside from "./Components/Aside";
import "./Main.scss";

class MainIm extends Component {
  render() {
    return (
      <>
        <Nav />
        <main className="MainIm">
          <article>
            <Feed />
          </article>
          <Aside />
        </main>
      </>
    );
  }
}
export default MainIm;
