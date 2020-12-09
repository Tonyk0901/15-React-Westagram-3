import React, { Component } from "react";

export class CommentList extends Component {
  likeIt = () => {
    this.props.likeComment(this.props.lists);
  };

  remover = () => {
    this.props.removeComment(this.props.lists);
  };

  render() {
    const { lists, isLiked } = this.props;
    const { remover, likeIt } = this;
    return (
      <>
        <li className="each_comment">
          <div>
            <span className="commentUserID">{lists.userName}</span>
            <span className="commentMsg">{lists.comment}</span>
          </div>
          <div className="button_box">
            <button className="like_button" onClick={likeIt}>
              {isLiked ? (
                <img src="/images/daehoim/heart.png" alt="comment_heart" />
              ) : (
                <img
                  alt="comment_heart"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
              )}
            </button>
            <button className="remove_button" onClick={remover}>
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI5NC4xMTEsMjU2LjAwMUw1MDQuMTA5LDQ2LjAwM2MxMC41MjMtMTAuNTI0LDEwLjUyMy0yNy41ODYsMC0zOC4xMDljLTEwLjUyNC0xMC41MjQtMjcuNTg3LTEwLjUyNC0zOC4xMSwwTDI1NiwyMTcuODkyDQoJCQlMNDYuMDAyLDcuODk0Yy0xMC41MjQtMTAuNTI0LTI3LjU4Ni0xMC41MjQtMzguMTA5LDBzLTEwLjUyNCwyNy41ODYsMCwzOC4xMDlsMjA5Ljk5OCwyMDkuOTk4TDcuODkzLDQ2NS45OTkNCgkJCWMtMTAuNTI0LDEwLjUyNC0xMC41MjQsMjcuNTg2LDAsMzguMTA5YzEwLjUyNCwxMC41MjQsMjcuNTg2LDEwLjUyMywzOC4xMDksMEwyNTYsMjk0LjExbDIwOS45OTcsMjA5Ljk5OA0KCQkJYzEwLjUyNCwxMC41MjQsMjcuNTg3LDEwLjUyMywzOC4xMSwwYzEwLjUyMy0xMC41MjQsMTAuNTIzLTI3LjU4NiwwLTM4LjEwOUwyOTQuMTExLDI1Ni4wMDF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                alt="comment_remove"
              />
            </button>
          </div>
        </li>
      </>
    );
  }
}

export default CommentList;
