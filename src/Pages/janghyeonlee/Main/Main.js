import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import StoryBox from "./Components/StoryBox/StoryBox";
import Feeds from "./Components/Feeds/Feeds";
import Aside from "./Components/Aside/Aside";
import "./Main.scss";
import "../reset.scss";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storiesData: [],
      recommendUsersData: [],
      footerData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/images/janghyeonlee/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          storiesData: res.storiesData,
          recommendUsersData: res.recommendUsersData,
          footerData: res.footerData,
        });
      });
  }

  render() {
    return (
      <div className="Main">
        <Nav />
        <main>
          <section className="main-left">
            <StoryBox storiesData={this.state.storiesData} />
            <Feeds />
          </section>
          <section className="main-right">
            <Aside recommendUsersData={this.state.recommendUsersData} footerData={this.state.footerData} />
          </section>
        </main>
      </div>
    );
  }
}

export default Main;
