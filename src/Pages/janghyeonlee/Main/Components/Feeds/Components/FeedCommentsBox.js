import React, { Component } from "react";
import Comment from "./Comment";
import "./FeedCommentsBox.scss";

class FeedCommentsBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments,
      inputComment: "",
    };
  }

  onSubmitComment = (e) => {
    e.preventDefault();
    const { inputComment, comments } = this.state;
    if (!inputComment) return;

    // unique한 key 어떻게 생성해야 할까
    const newComment = {
      id: comments.length,
      key: inputComment + new Date(),
      userId: "janghyeon_300",
      likesNum: 0,
      comment: inputComment,
      liked: false,
    };

    const updatedComments = comments.concat(newComment);

    this.props.onCommentsChange(updatedComments);
    this.setState({ comments: updatedComments, inputComment: "" });
  };

  reOrderId = (arr) => {
    return arr.map((item, idx) => {
      item.id = idx;
      return item;
    });
  };

  removeComment = (id) => {
    const { comments } = this.state;
    let commentAfterRemoved = comments.filter((comment) => comment.id !== id);

    commentAfterRemoved = this.reOrderId(commentAfterRemoved);

    this.setState({ comments: commentAfterRemoved });
  };

  toggleHeart = (id) => {
    const comments = this.state.comments;
    let commentsAfterHeartClicked = comments.map((comment) => {
      let updatedComment = comment;
      if (comment.id === id) {
        if (comment.liked) comment.likesNum -= 1;
        else comment.likesNum += 1;
        updatedComment.liked = !updatedComment.liked;
      }
      return updatedComment;
    });

    this.setState({ comments: commentsAfterHeartClicked });
  };

  render() {
    return (
      <div className="feed-comment-box">
        <section className="feed-comments westa-feed-padding-x">
          <ul>
            {this.state.comments.map(({ id, key, userId, comment, likesNum, liked }) => (
              <Comment
                id={id}
                key={key}
                userId={userId}
                comment={comment}
                likesNum={likesNum}
                liked={liked}
                onRemove={this.removeComment}
                toggleHeart={this.toggleHeart}
              />
            ))}
          </ul>
        </section>
        <p className="feed-upload-date westa-feed-padding-x">11월 24일</p>
        <form onSubmit={this.onSubmitComment} className="feed-comment-input-box westa-feed-padding-x">
          <input
            className="feed-new-comment-input"
            type="text"
            placeholder="댓글 달기..."
            value={this.state.inputComment}
            onChange={(e) => this.setState({ inputComment: e.target.value })}
          />
          <button className="feed-comment-upload-button" type="submit">
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default FeedCommentsBox;
