import React from 'react';

import "./Comment.scss";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
  }

  handleDelete = (event) => {
    this.props.handleDelete(event.target.id);
  }

  handleLike = (event) => {
    this.props.handleLike(event.target.id);
  }

  render() {
    const { userId, comment, id, liked } = this.props;
    return (
      <section className="CommentKim">
        <div className="comment-column">
          <strong>
            {userId}
          </strong>
          <span>
            {comment}
          </span>
        </div>
        <div className="comment-column">
          <img src="images/sunghoonkim/deleteBtn.svg" id={id} className="faIcon add-cursor" onClick={this.handleDelete} alt="delete" />
          <img src={liked ? "images/sunghoonkim/heartLiked.svg" : "images/sunghoonkim/heartNotLiked.svg"} id={id} className="faIcon add-cursor" onClick={this.handleLike} alt="like" />
        </div>
      </section>
    );
  }
}

export default Comment;