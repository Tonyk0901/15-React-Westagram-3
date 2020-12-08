import React from "react";
import WriteComments from "./WriteComments";

class CommentPart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        { id: Math.random() * (10 - 1) + 1, username: "chaehoon.p", text: " 고냥이 발바닥 쭙쭙" },
        { id: Math.random() * (10 - 1) + 1, username: "jhyeon_300", text: " 고양이보단 개" },
        { id: Math.random() * (10 - 1) + 1, username: "chaehoon.p", text: " 이건 아니지,," },
      ],
    };
  }

  addingComment = (username, text) => {
    const newComments = this.state.comments;
    console.log("addingComment activated");

    newComments.push({ id: Math.random() * (10 - 1) + 1, username, text });

    this.setState(
      {
        comments: newComments,
      },
      console.log(this.state.comments),
    );
  };

  subtractingComment = (e) => {
    e.preventDefault();
    console.log("subtractingComment activated");
    const comments = this.state.comments;
    console.log(e.target.id);

    const result = comments.filter((comment) => comment.id !== Number(e.target.id));
    console.log(result);
    this.setState({
      comments: result,
    });
  };

  render() {
    const COMMENTS = this.state.comments;
    return (
      <>
        <div className="fifth-row">
          <ul>
            {COMMENTS.map((el) => {
              return (
                <li name={el.id}>
                  <span className="username-bold">{el.username}</span>
                  {el.text}
                  <span>
                    <i class="fas fa-times" id={el.id} onClick={this.subtractingComment} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <WriteComments comments={this.state.comments} addingFunction={this.addingComment} />
      </>
    );
  }
}

export default CommentPart;
