import React, { Component } from "react";

export class Comment extends Component {
  constructor() {
    super();
    this.id = 1; // 이미 list에 댓글이 하나 추가되어 있기 때문에 id값은 1부터 시작한다고 값을 할당
    this.state = {
      comment: "",
      list: [{ id: 0, name: "daehoieem", comment: "그리스도의 사랑을" }],
    };
  }
  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  handleSubmit = (e) => {
    const { comment, list } = this.state;
    e.preventDefault();
    this.setState({
      list: list.concat({
        id: this.id++,
        name: "compassionkorea",
        comment: comment, // 여기서 spread 연산자 사용할 수 있을까?
      }),
      comment: "", // comment 추가 후 다시 input창 비움
    });
  };
  handleRemove = (id) => {
    const { list } = this.state;
    this.setState({
      list: list.filter((el) => el.id !== id),
    });
  };

  render() {
    const { comment } = this.state;
    const { handleChange, handleSubmit, handleRemove } = this;
    let activateBtn = comment.length > 0;
    return (
      <>
        <div className="Comment">
          <div className="comment_section">
            <ul className="comments">
              {this.state.list.map((item) => {
                return (
                  <li className="each_comment">
                    <div>
                      <span className="commentUserID">{item.name}</span>
                      <span className="commentMsg">{item.comment}</span>
                    </div>
                    <div className="button_box">
                      <button className="like_button">
                        <img
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                          alt="comment_heart"
                        />
                      </button>
                      <button className="remove_button" onClick={() => handleRemove(item.id)}>
                        <img
                          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMi4wMDEgNTEyLjAwMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI5NC4xMTEsMjU2LjAwMUw1MDQuMTA5LDQ2LjAwM2MxMC41MjMtMTAuNTI0LDEwLjUyMy0yNy41ODYsMC0zOC4xMDljLTEwLjUyNC0xMC41MjQtMjcuNTg3LTEwLjUyNC0zOC4xMSwwTDI1NiwyMTcuODkyDQoJCQlMNDYuMDAyLDcuODk0Yy0xMC41MjQtMTAuNTI0LTI3LjU4Ni0xMC41MjQtMzguMTA5LDBzLTEwLjUyNCwyNy41ODYsMCwzOC4xMDlsMjA5Ljk5OCwyMDkuOTk4TDcuODkzLDQ2NS45OTkNCgkJCWMtMTAuNTI0LDEwLjUyNC0xMC41MjQsMjcuNTg2LDAsMzguMTA5YzEwLjUyNCwxMC41MjQsMjcuNTg2LDEwLjUyMywzOC4xMDksMEwyNTYsMjk0LjExbDIwOS45OTcsMjA5Ljk5OA0KCQkJYzEwLjUyNCwxMC41MjQsMjcuNTg3LDEwLjUyMywzOC4xMSwwYzEwLjUyMy0xMC41MjQsMTAuNTIzLTI3LjU4NiwwLTM4LjEwOUwyOTQuMTExLDI1Ni4wMDF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                          alt="comment_remove"
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="updated_time">3주 전</p>
          </div>
        </div>
        <form className="AddComment" onSubmit={handleSubmit}>
          <input value={comment} onChange={handleChange} type="text" placeholder="댓글 달기..." />
          <button className="submit_comment" disabled={activateBtn ? false : true}>
            게시
          </button>
        </form>
      </>
    );
  }
}

export default Comment;
