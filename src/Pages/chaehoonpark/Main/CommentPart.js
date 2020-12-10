import React from "react";
import WriteComments from "./WriteComments";

class CommentPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/chaehoonpark/data.json", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          comments: res.data,
        });
      });
  }

  addingComment = (username, text) => {
    const newComments = this.state.comments;
    newComments.push({ id: Math.random() * (10 - 1) + 1, username, text });

    this.setState({
      comments: newComments,
    });
  };

  subtractingComment = (e) => {
    e.preventDefault();
    const comments = this.state.comments;

    const result = comments.filter((comment) => comment.id !== Number(e.target.id));
    this.setState({
      comments: result,
    });
  };

  render() {
    const comments = this.state.comments;
    return (
      <>
        <div className="fifth-row">
          <ul>
            {comments.map((el) => {
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
