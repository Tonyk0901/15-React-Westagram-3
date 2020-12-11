import React from "react";
import Feed from "./Components/Feed.js";
import Navigation from "./Components/Navigation.js";
import Aside from "./Components/Aside.js";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="MainKim">
        <Navigation />
        <main className="feeds-main">
          <Feed />
          <Aside />
        </main>
      </div>
    );
  }
}

export default Main;
