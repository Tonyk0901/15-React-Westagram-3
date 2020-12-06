import React, { Component } from "react";
import "./Story.scss";

class Story extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <div className="story-icon-profile">
        <img src={src} alt={alt} className="circle-img" />
      </div>
    );
  }
}

export default Story;
