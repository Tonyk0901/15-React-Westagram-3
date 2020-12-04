import React, { Component } from "react";
import "./RecommendUser.scss";

class RecommendUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userId, imgUrl } = this.props;
    return (
      <div className="aside-recommend-user-box">
        <div className="aside-recommend-user-info">
          <figure className="aside-recommend-user-profile">
            <img src={imgUrl} alt={`recommend ${userId} profile`} />
          </figure>
          <div className="aside-recommend-user-text-info">
            <p className="aside-recommend-user-id">{userId}</p>
            <p className="aside-recommend-user-name">Follows you</p>
          </div>
        </div>
        <button className="aside-follow-recommend-user-button">팔로우</button>
      </div>
    );
  }
}

export default RecommendUser;
