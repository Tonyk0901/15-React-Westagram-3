import React, { Component } from "react";

class WriteComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "chaehoon.p",
      userComment: "",
    };
  }

  UserCommentFunction = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  LinkToAddingComment = (e) => {
    e.preventDefault();

    this.props.addingFunction(this.state.username, this.state.userComment);
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
