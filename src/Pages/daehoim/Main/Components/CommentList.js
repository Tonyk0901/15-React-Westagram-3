import React, { Component } from "react";
import removeBtnImg from "../config.js";

export class CommentList extends Component {
  likeIt = () => {
    this.props.likeComment(this.props.lists);
  };

  remover = () => {
    this.props.removeComment(this.props.lists);
  };

  render() {
    const { lists, isLiked } = this.props;
    const { remover, likeIt } = this;
    return (
      <>
        <li className="each_comment">
          <div>
            <span className="commentUserID">{lists.userName}</span>
            <span className="commentMsg">{lists.comment}</span>
          </div>
          <div className="button_box">
            <button className="like_button" onClick={likeIt}>
              <img
                alt="comment_heart"
                src={
                  isLiked
                    ? `/images/daehoim/heart.png`
                    : `https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png`
                }
              />
            </button>
            <button className="remove_button" onClick={remover}>
              <img src={removeBtnImg} alt="comment_remove" />
            </button>
          </div>
        </li>
      </>
    );
  }
}

export default CommentList;
