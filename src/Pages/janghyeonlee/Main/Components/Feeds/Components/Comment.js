import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleRemoveButtonClick = (e) => {
    this.props.onRemove(this.props.id);
  };

  handleHeartButtonClick = (e) => {
    this.props.toggleHeart(this.props.id);
  };

  render() {
    return (
      <li className="single-comment-box">
        <p className="comment-content">
          <span className="comment-userid">{this.props.userId} </span>
          {this.props.comment}
        </p>
        <div className="comment-side-info">
          <p>{this.props.likesNum}</p>
          <button className="comment-heart-button" onClick={this.handleHeartButtonClick}>
            <img
              src="images/janghyeonlee/heart.svg"
              alt="comment-heart-button"
              style={this.props.liked ? { display: "none" } : { display: "block" }}
            />
            <img
              src="images/janghyeonlee/heart_red.svg"
              alt="comment-heart-button"
              style={this.props.liked ? { display: "block" } : { display: "none" }}
            />
          </button>
          <button className="comment-delete-button" onClick={this.handleRemoveButtonClick}>
            삭제
          </button>
        </div>
      </li>
    );
  }
}

export default Comment;
