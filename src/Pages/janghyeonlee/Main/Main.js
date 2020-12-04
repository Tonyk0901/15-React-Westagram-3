import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import StoryBox from "./Components/StoryBox/StoryBox";
import Feeds from "./Components/Feeds/Feeds";
import Aside from "./Components/Aside/Aside";
import "./Main.scss";
import "../reset.scss";
class Main extends Component {
  render() {
    return (
      <>
        <div className="Main">
          <Nav />
          <main>
            <section className="main-left">
              <StoryBox />
              <Feeds />
            </section>
            <section className="main-right">
              <Aside />
            </section>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
