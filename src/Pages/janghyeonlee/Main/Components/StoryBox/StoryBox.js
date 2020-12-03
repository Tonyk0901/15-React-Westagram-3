import React, { Component } from "react";
import "./StoryBox.scss";

class StoryBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storiesData: [],
    };
  }

  generateStories = () => {
    return this.state.storiesData.map((story) => {
      return (
        <div className="story-icon-profile">
          <img src={story.src} alt="" className="circle-img" />
        </div>
      );
    });
  };

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
    console.log(this.state.storiesData[0]);
    return <section className="story-box westa-border westa-feed-padding-x">{this.generateStories()}</section>;
  }
}

export default StoryBox;
