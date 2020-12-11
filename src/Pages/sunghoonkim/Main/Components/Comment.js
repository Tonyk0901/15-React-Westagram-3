import React from 'react';
import "./Comment.scss";

class Comment extends React.Component {
  handleDelete = () => {
    this.props.handleDelete(this.props.comment);
  }

  handleLike = () => {
    this.props.handleLike(this.props.comment);
  }

  render() {
    const { usrId, comment, isLiked } = this.props.comment;
    return (
      <section className="CommentKim">
        <div className="column">
          <strong>
            {usrId}
          </strong>
          <span>
            {comment}
          </span>
        </div>
        <div className="column">
          {usrId === "sunghoon__kim" ? <img src="images/sunghoonkim/deleteBtn.svg" className="faIcon add-cursor" onClick={this.handleDelete} alt="delete" /> : ""}
          <img src={isLiked ? "images/sunghoonkim/heartLiked.svg" : "images/sunghoonkim/heartNotLiked.svg"} className="faIcon add-cursor" onClick={this.handleLike} alt="like" />
        </div>
      </section>
    );
  }
}

export default Comment;