import React, { Component } from "react";
import Story from "./Story";
import "./StoryBox.scss";

class StoryBox extends Component {
  render() {
    return (
      <section className="story-box westa-border westa-feed-padding-x">
        {this.props.storiesData.map(({ key, src, alt }) => {
          return <Story key={key} src={src} alt={alt}></Story>;
        })}
      </section>
    );
  }
}

export default StoryBox;
