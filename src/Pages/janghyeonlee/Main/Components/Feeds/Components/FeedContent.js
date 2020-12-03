import React, { Component } from "react";
import "./FeedContent.scss";

class FeedContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="feed-content-box">
        <figure className="feed-img-box">
          <img src={this.props.feedImgSrc} alt="super cute samoyed!" />
        </figure>
        <section className="feed-social-box westa-feed-padding-x">
          <div className="feed-social-icons-box">
            <div className="feed-social-left-icons">
              <img src="images/janghyeonlee/heart.png" alt="heart icon" />
              <img src="images/janghyeonlee/comment.png" alt="comment icon" />
              <img src="images/janghyeonlee/send.png" alt="send icon" />
            </div>
            <div className="feed-social-right-icons">
              <img src="images/janghyeonlee/bookmark.png" alt="bookmark icon" />
            </div>
          </div>
          <div className="feed-social-likes">좋아요 777,777개</div>
        </section>
        <div className="feed-description-box westa-feed-padding-x">
          <span className="feed-description-publisher-name">youtube</span>
          댕댕이는 너무 기여워. 사모예드 너무 좋아. 댕댕이는 너무 기여워. 사모예드 너무 좋아. 댕댕이는 너무 기여워.
          사모예드 너무 좋아. 댕댕이는 너무 기여워. 사모예드 너무 좋아. 댕댕이는 너무 기여워. 사모예드 너무 좋아.
          댕댕이는 너무 기여워. 사모예드 너무 좋아. 댕댕이는 너무 기여워. 사모예드 너무 좋아. 댕댕이는 너무 기여워.
          사모예드 너무 좋아. 댕댕이는 너무 기여워. 사모예드 너무 좋아. 댕댕이는 너무 기여워. 사모예드 너무 좋아.
          댕댕이는 너무 기여워. 사모예드 너무 좋아. 댕댕이는 너무 기여워. 사모예드 너무 좋아.
        </div>
      </div>
    );
  }
}

export default FeedContent;
