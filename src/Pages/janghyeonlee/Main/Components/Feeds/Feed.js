import React, { Component } from "react";
import FeedCommentsBox from "./Components/FeedCommentsBox";
import FeedContent from "./Components/FeedContent";
import FeedHeader from "./Components/FeedHeader";
import "./Feed.scss";

class Feed extends Component {
  render() {
    return (
      <article className="feed-box westa-border">
        <FeedHeader />
        <FeedContent feedImgSrc={this.props.feedImgSrc} />
        <FeedCommentsBox
          comments={this.props.comments}
          onCommentsChange={this.props.onCommentsChange}
          id={this.props.id}
        />
      </article>
    );
  }
}

export default Feed;
