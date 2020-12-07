import React from "react";
import WriteComments from "./WriteComments";

class CommentPart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        { id: 0, username: "chaehoon.p", text: " 고냥이 발바닥 쭙쭙" },
        { id: 1, username: "jhyeon", text: " 고양이보단 개" },
        { id: 2, username: "chaehoon.p", text: " 오반데,," },
      ],
    };
  }

  AddingComment = (username, text) => {
    const newComments = this.state.comments;
    console.log("AddingComment activated");

    newComments.push({ id: this.state.comments.length, username, text });

    console.log(newComments);

    this.setState({
      comments: newComments,
    });

    console.log(this.state.comments);
  };

  render() {
    const COMMENTS = this.state.comments;
    return (
      <>
        <div className="fifth-row">
          <ul>
            {COMMENTS.map((el) => {
              return (
                <li>
                  <span className="username-bold">{el.username}</span>
                  {el.text}
                </li>
              );
            })}
          </ul>
        </div>
        <WriteComments comments={this.state.comments} addingFunction={this.AddingComment} />
      </>
    );
  }
}

export default CommentPart;
