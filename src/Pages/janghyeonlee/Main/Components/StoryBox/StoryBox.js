import React, { Component } from "react";
import Story from "./Story";
import "./StoryBox.scss";

class StoryBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storiesData: [],
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
        });
      });
  }

  render() {
    return (
      <section className="story-box westa-border westa-feed-padding-x">
        {this.state.storiesData.map(({ key, src, alt }) => {
          return <Story key={key} src={src} alt={alt}></Story>;
        })}
      </section>
    );
  }
}

export default StoryBox;
