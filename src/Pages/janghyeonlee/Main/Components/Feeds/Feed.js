import React, { Component } from "react";
import FeedCommentsBox from "./Components/FeedCommentsBox";
import FeedContent from "./Components/FeedContent";
import FeedHeader from "./Components/FeedHeader";
import "./Feed.scss";

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <article className="feed-box westa-border">
        <FeedHeader />
        <FeedContent feedImgSrc={this.props.feedImgSrc} />
        <FeedCommentsBox comments={this.props.comments} onCommentsChange={this.props.onCommentsChange} />
      </article>
    );
  }
}

export default Feed;
