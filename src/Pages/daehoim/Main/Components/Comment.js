import React, { Component } from "react";
import CommentList from "../Components/CommentList";

export class Comment extends Component {
  constructor() {
    super();
    this.id = 0;
    this.state = {
      commentInput: "",
      lists: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/daehoim/data.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          lists: res.commentData,
        });
      });
  }

  getInputValue = (e) => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  addComment = (e) => {
    e.preventDefault();
    const { commentInput } = this.state;
    const newComment = {
      id: `daehoieem + ${this.id++}`,
      userName: "daehoieem",
      comment: commentInput,
      isliked: false,
    };
    this.setState({
      lists: [...this.state.lists, newComment],
      commentInput: "",
    });
  };

  handleRemove = (list) => {
    const newList = this.state.lists.filter((el) => el.id !== list.id);
    this.setState({ lists: newList });
  };

  render() {
    const { commentInput, lists } = this.state;
    const { addComment, getInputValue } = this;
    let activateBtn = commentInput.length > 0 && commentInput.trim();
    return (
      <>
        <div className="Comment">
          <div className="comment_section">
            <ul className="comments">
              {lists.map((list) => (
                <CommentList key={list.id} lists={list} removeComment={this.handleRemove} />
              ))}
            </ul>
          </div>
          <div>
            <p className="updated_time">3주 전</p>
          </div>
        </div>
        <form className="AddComment" onSubmit={addComment}>
          <input value={commentInput} onChange={getInputValue} type="text" placeholder="댓글 달기..." />
          <button className="submit_comment" disabled={!activateBtn}>
            게시
          </button>
        </form>
      </>
    );
  }
}

export default Comment;
