import React, { Component } from "react";

class WriteComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "chaehoon.p",
      UserComment: "",
    };
  }

  UserCommentFunction = (e) => {
    // 아니 이거 arrow function 으로 바꾸니까 오류 안 나는거 모임?
    console.log("UserCommentFunction activated");
    e.preventDefault();
    const { name, value } = e.target;

    this.setState(
      {
        [name]: value,
      },
      console.log(this.state.UserComment),
    );
  };

  LinkToAddingComment = (e) => {
    e.preventDefault();
    console.log("LinkToAddingComment activated");
    this.props.addingFunction(this.state.Username, this.state.UserComment);
  };

  render() {
    return (
      <form className="add-comments" onSubmit={this.LinkToAddingComment}>
        <section className="input-box">
          <input
            className="space-to-add-comment"
            name="UserComment"
            placeholder="댓글 달기..."
            onChange={this.UserCommentFunction}
          />
        </section>
        <section className="button-box">
          <button className="button">게시</button>
        </section>
      </form>
    );
  }
}

export default WriteComments;
