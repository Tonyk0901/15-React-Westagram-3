import React, { Component } from "react";
import FeedCommentsBox from "./Components/FeedCommentsBox";
import FeedContent from "./Components/FeedContent";
import FeedHeader from "./Components/FeedHeader";
import "./Feed.scss";

class Feed extends Component {
  render() {
    const { feedImgSrc, comments, onCommentsChange, id } = this.props;
    return (
      <article className="feed-box westa-border">
        <FeedHeader />
        <FeedContent feedImgSrc={feedImgSrc} />
        <FeedCommentsBox comments={comments} onCommentsChange={onCommentsChange} id={id} />
      </article>
    );
  }
}

export default Feed;
