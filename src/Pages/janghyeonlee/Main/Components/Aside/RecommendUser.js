import React, { Component } from "react";
import "./RecommendUser.scss";

class RecommendUser extends Component {
  render() {
    const { userId, imgUrl } = this.props;
    return (
      <div className="recommend-user-box">
        <div className="user-info">
          <figure className="profile">
            <img src={imgUrl} alt={`recommend ${userId} profile`} />
          </figure>
          <div className="text-info">
            <p className="id">{userId}</p>
            <p className="name">Follows you</p>
          </div>
        </div>
        <button>팔로우</button>
      </div>
    );
  }
}

export default RecommendUser;
