import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import "../Common.scss";

class LoginIm extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  handleEachInput = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = () => {
    this.props.history.push("/MainIm");
  };

  render() {
    const { id, pw } = this.state;
    let activateBtn = id.includes("@") && pw.length >= 5;
    return (
      <div className="login">
        <header>
          <p>Westagram</p>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="login_input"
            id="id"
            onChange={this.handleEachInput}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="password_input"
            id="pw"
            onChange={this.handleEachInput}
          />
          <div>
            <button disabled={activateBtn ? false : true}>로그인</button>
          </div>
        </form>
        <footer>
          <a href="#none">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>
    );
  }
}
export default withRouter(LoginIm);
