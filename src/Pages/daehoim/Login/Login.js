import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.scss";

const API = "http://3.35.19.3:8000";

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

  checkValidation = (e) => {
    e.preventDefault();
    const { id, pw } = this.state;
    const idValidation = id.includes("@");
    const pwValidation = pw.includes.length >= 5;
    if (idValidation && pwValidation) {
      this.handleSubmit();
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        if (result.Authorization) {
          localStorage.setItem("token", result.Authorization);
          alert("로그인 성공");
          this.props.history.push("/MainIm");
        }
      });
  };

  render() {
    const { id, pw } = this.state;
    let activateBtn = id.includes("@") && pw.length >= 5;
    return (
      <div className="login">
        <header>
          <p>Westagram</p>
        </header>
        <form>
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
            <button onClick={this.handleSubmit} disabled={activateBtn ? false : true}>
              로그인
            </button>
          </div>
        </form>
        <footer>
          <Link href="#none">비밀번호를 잊으셨나요?</Link>
        </footer>
      </div>
    );
  }
}
export default withRouter(LoginIm);
