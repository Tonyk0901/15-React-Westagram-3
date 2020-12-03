import React, { Component } from "react";
import "./FeedHeader.scss";

class FeedHeader extends Component {
  state = {};
  render() {
    return (
      <header className="feed-header-box westa-feed-padding-x">
        <div className="feed-publisher-box">
          <figure className="feed-publisher-profile westa-border">
            <img src="images/janghyeonlee/facebook.png" alt="facebook icon" />
          </figure>
          <div className="feed-publisher-info-box">
            <p className="feed-publisher-name">facebook</p>
            <p className="feed-publisher-place">Korea</p>
          </div>
        </div>
        <button className="feed-header-menu">···</button>
      </header>
    );
  }
}

export default FeedHeader;
