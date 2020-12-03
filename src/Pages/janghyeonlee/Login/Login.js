import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";
import "../reset.scss";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputId: "",
      inputPw: "",
      isValidId: false,
      isValidPw: false,
      allowLogin: false,
      errorMessage: "",
    };
  }

  handleSubmit = () => {
    this.props.history.push("/main");
  };

  validatePw = (pw) => {
    const pwValidation = {
      regexUppercase: /[A-Z]/g,
      regexLowercase: /[a-z]/g,
      regexSpecialCharacter: /[!|@|#|$|%|^|&|*]/g,
      regexDigit: /[0-9]/g,
    };
    const errorMatchEngToKor = {
      regexUppercase: "영어 대문자를",
      regexLowercase: "영어 소문자를",
      regexSpecialCharacter: "특수 문자를",
      regexDigit: "숫자를",
    };
    const MIN_PW_LENGTH = 8;
    const pwLength = pw.length;

    for (let validType in pwValidation) {
      if (!pw.match(pwValidation[validType]) && pwLength) {
        this.setState({
          errorMessage: `비밀번호는 ${errorMatchEngToKor[validType]} 포함해야 합니다.`,
        });
        return false;
      }
    }

    if (pwLength >= MIN_PW_LENGTH) return true;
    else if (!pwLength) {
      this.setState({ errorMessage: "" });
    } else {
      this.setState({ errorMessage: "비밀번호는 8자리 이상입니다." });
      return false;
    }
  };

  validateId = (id) => {
    const validIdRegExp = /\w@\w+\.\w/i;
    return id.match(validIdRegExp) ? true : false;
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    let isValidId = false;
    let isValidPw = false;
    let isValidInput = false;

    if (name === "inputId") {
      isValidId = this.validateId(value);
      isValidPw = this.validatePw(this.state.inputPw);
      isValidInput = isValidId && isValidPw;
    } else {
      isValidId = this.validateId(this.state.inputId);
      isValidPw = this.validatePw(value);
      isValidInput = isValidId && isValidPw;
    }

    isValidInput ? this.setState({ allowLogin: true }) : this.setState({ allowLogin: false });
    isValidId ? this.setState({ isValidId: true }) : this.setState({ isValidId: false });
    isValidPw ? this.setState({ isValidPw: true }) : this.setState({ isValidPw: false });

    if (isValidInput) this.setState({ errorMessage: "" });
    if (isValidPw && !isValidId) this.setState({ errorMessage: "올바른 이메일을 입력해 주세요." });

    this.setState({
      [name]: value,
    });

    return { isValidId, isValidPw, isValidInput };
  };

  render() {
    return (
      <section className="Login">
        <header className="title-box">
          <img src="images/janghyeonlee/westagram_big.png" alt="westagram logo" />
        </header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="id"
            name="inputId"
            placeholder="이메일을 입력해주세요."
            value={this.state.inputId}
            style={this.state.isValidId ? { borderColor: "green" } : { borderColor: "rgb(219,219,219)" }}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            className="password"
            name="inputPw"
            placeholder="비밀번호"
            value={this.state.inputPw}
            style={this.state.isValidPw ? { borderColor: "green" } : { borderColor: "rgb(219,219,219)" }}
            onChange={this.handleInputChange}
          />
          <p
            className="valid-check-message"
            style={this.state.errorMessage ? { display: "block" } : { display: "none" }}
          >
            {this.state.errorMessage}
          </p>
          <button
            className="login-button"
            style={
              this.state.allowLogin
                ? { backgroundColor: "blue", cursor: "pointer" }
                : { backgroundColor: "#C5E0FC", cursor: "default" }
            }
            disabled={!this.state.allowLogin}
          >
            로그인
          </button>
        </form>
        <div className="footer-box">
          <p className="password-lost">비밀번호를 잊으셨나요?</p>
        </div>
      </section>
    );
  }
}

export default withRouter(Login);
