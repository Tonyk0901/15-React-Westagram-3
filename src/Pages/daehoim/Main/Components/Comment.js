import React, { Component } from "react";
import CommentList from "../Components/CommentList";

export class Comment extends Component {
  constructor() {
    super();
    this.id = 0;
    this.state = {
      comment: "",
      lists: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/daehoim/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          lists: res.data,
        });
      });
  }

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { comment, lists } = this.state;
    e.preventDefault();
    this.setState({
      lists: lists.concat({
        id: this.id++,
        userName: "compassionkorea",
        comment: comment,
        isLiked: false,
      }),
      comment: "", // comment 추가 후 다시 input창 비움, concat을 사용해서 배열에 추가
    });
  };

  handleRemove = (list) => {
    const newList = this.state.lists.filter((el) => el.id !== list.id);
    this.setState({ lists: newList });
  };

  toggleLike = () => {
    // const { lists } = this.state; // [... this.state.lists]의 차이
    this.setState({ likeBtn: !this.state.likeBtn });
    console.log(this.state.likeBtn);
  };

  render() {
    const { comment, lists } = this.state;
    const { handleSubmit, handleChange } = this;
    let activateBtn = comment.length > 0 && comment.trim();
    return (
      <>
        <div className="Comment">
          <div className="comment_section">
            <ul className="comments">
              {lists.map((list) => (
                <CommentList lists={list} removeComment={this.handleRemove} likeComment={this.toggleLike} />
              ))}
            </ul>
          </div>
          <div>
            <p className="updated_time">3주 전</p>
          </div>
        </div>
        <form className="AddComment" onSubmit={handleSubmit}>
          <input value={comment} onChange={handleChange} type="text" placeholder="댓글 달기..." />
          <button className="submit_comment" disabled={!activateBtn}>
            게시
          </button>
        </form>
      </>
    );
  }
}

export default Comment;
