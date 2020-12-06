import React, { Component } from "react";
import Feed from "./Feed";

class Feeds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedsData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/images/janghyeonlee/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          feedsData: res.feedsData,
        });
      });
  }

  handleCommentChange = (comments, key) => {
    console.log(key);
    //console.log(comments);
    const newFeedsData = this.state.feedsData.map((feed) => {
      if (feed.key === key) feed.comments = comments;
      return feed;
    });

    console.log(newFeedsData);
    this.setState({ feedsData: newFeedsData });
  };

  render() {
    return (
      <>
        {this.state.feedsData.map((data) => (
          <Feed
            id={data.key}
            key={data.key}
            feedImgSrc={data.imgUrl}
            comments={data.comments}
            onCommentsChange={this.handleCommentChange}
          />
        ))}
      </>
    );
  }
}

export default Feeds;
