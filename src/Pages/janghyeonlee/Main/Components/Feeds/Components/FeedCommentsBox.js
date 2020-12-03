import React, { Component } from "react";
import Comment from "./Components/Comment";
import "./FeedCommentsBox.scss";

class FeedCommentsBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments,
      inputComment: "",
      deletedIds: [],
    };
  }

  onSubmitComment = (e) => {
    e.preventDefault();
    const { inputComment, comments, deletedIds } = this.state;
    if (!inputComment) {
      // placeholder "빈 댓글은 올릴 수 없습니다."
      return;
    }
    // 랜덤 키 생성 어떻게?
    let newDeletedIds = deletedIds;
    console.log(newDeletedIds);
    const newComment = {
      id: comments.length,
      key: inputComment + new Date(),
      userId: "janghyeon_300",
      likesNum: 0,
      comment: inputComment,
      liked: false,
    };

    if (!newDeletedIds) {
      newComment.key = newDeletedIds.pop();
    }

    const updatedComments = comments.concat(newComment);

    this.props.onCommentsChange(updatedComments);
    this.setState({ comments: updatedComments, inputComment: "" });
  };

  handleCommentInputChange = (e) => {
    this.setState({ inputComment: e.target.value });
  };

  reOrderId = (arr) => {
    return arr.map((item, idx) => {
      item.id = idx;
      return item;
    });
  };

  removeComment = (id) => {
    const { comments, deletedIds } = this.state;
    let commentAfterRemoved = comments.filter((comment) => comment.id !== id);

    commentAfterRemoved = this.reOrderId(commentAfterRemoved);

    this.setState({ comments: commentAfterRemoved, deletedIds: deletedIds.concat(id) });
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
    console.log(id);
  };

  render() {
    const commentsList = this.state.comments.map(({ id, key, userId, comment, likesNum, liked }) => (
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
    ));
    return (
      <div className="feed-comment-box">
        <section className="feed-comments westa-feed-padding-x">
          <ul>{commentsList}</ul>
        </section>
        <p className="feed-upload-date westa-feed-padding-x">11월 24일</p>
        <form onSubmit={this.onSubmitComment} className="feed-comment-input-box westa-feed-padding-x">
          <input
            className="feed-new-comment-input"
            type="text"
            placeholder="댓글 달기..."
            value={this.state.inputComment}
            onChange={this.handleCommentInputChange}
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
