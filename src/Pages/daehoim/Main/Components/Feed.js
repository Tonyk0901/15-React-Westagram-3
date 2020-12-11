import React, { Component } from "react";
import Comment from "./Comment";
import * as configs from "../../../../config_daeho.js";

export class Feed extends Component {
  render() {
    return (
      <>
        <div className="Feed">
          <img className="user_img" src={configs.FEED_USER_IMG} alt="user_profile_img" />
          <div>
            <span>compassionkorea</span>
            <p>한국컴패션</p>
          </div>
          <img className="more" alt="more_img" src={configs.FEED_MORE_IMG} />
        </div>
        <div className="feed_img_container">
          <img
            src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/123245829_1472129352986945_2420344400157355594_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=uclls1m5pHQAX9jSOFp&tp=1&oh=8150adb32611b4a0c79259132a56e40d&oe=5FE62776"
            alt="feed_img"
          />
        </div>
        <div className="feed_content">
          <div className="feed_icons">
            <div>
              <button type="button" id="liked" className="feed_icon">
                <img src={configs.FEED_LIKE_BTN} alt="liked_img" />
              </button>
              <button type="button" id="comment" className="feed_icon">
                <img src={configs.FEED_COMMENT_BTN} alt="comment_img" />
              </button>
              <button type="button" id="share" className="feed_icon">
                <img src={configs.FEED_SHARE_BTN} alt="share" />
              </button>
            </div>
            <button type="button" id="bookmark" className="feed_icon">
              <img src={configs.FEED_BOOKMARK_BTN} alt="bookmark" />
            </button>
          </div>
          <div className="who_liked">
            <p>좋아요 919개</p>
          </div>
          <div className="feed_description">
            <p>
              <span className="feedUserID">compassionkorea</span> 오늘은 한국컴패션이 17번째 ...
              <span className="more_comment">더 보기</span>
            </p>
          </div>
        </div>
        <Comment />
      </>
    );
  }
}

export default Feed;
