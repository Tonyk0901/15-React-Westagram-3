import React, { Component } from "react";
import * as configs from "../../../../config_daeho.js";

export class CommentList extends Component {
  remover = () => {
    this.props.removeComment(this.props.lists);
  };

  render() {
    const { lists } = this.props;
    const { remover } = this;
    return (
      <>
        <li className="CommentList">
          <div>
            <span className="commentUserID">{lists.userName}</span>
            <span className="commentMsg">{lists.comment}</span>
          </div>
          <div className="button_box">
            <button className="like_button">
              <img alt="comment_heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            </button>
            <button className="remove_button" onClick={remover}>
              <img src={configs.REMOVE_BTN_IMG} alt="comment_remove" />
            </button>
          </div>
        </li>
      </>
    );
  }
}

export default CommentList;
