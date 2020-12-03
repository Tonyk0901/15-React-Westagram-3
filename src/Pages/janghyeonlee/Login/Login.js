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
      errorMessage: "",
    };
  }

  handleSubmit = () => {
    this.props.history.push("/MainLee");
  };

  // 첫번째 인자 : validating 할 password
  // 두번째 인자 : 에러 메세지 state 변경 여부
  validatePw = (pw, setErrorMsg = true) => {
    const pwValidation = {
      regexUppercase: /[A-Z]/g,
      regexLowercase: /[a-z]/g,
      regexSpecialCharacter: /[!|@|#|$|%|^|&|*]/g,
      regexDigit: /[0-9]/g,
    };
    const errMsgMatch = {
      regexUppercase: "영어 대문자를",
      regexLowercase: "영어 소문자를",
      regexSpecialCharacter: "특수 문자를",
      regexDigit: "숫자를",
    };
    const MIN_PW_LENGTH = 8;
    const pwLength = pw.length;

    if (setErrorMsg && !pwLength) {
      this.setState({ errorMessage: "" });
      return false;
    }

    for (let validType in pwValidation) {
      if (!pw.match(pwValidation[validType]) && pwLength) {
        if (setErrorMsg)
          this.setState({
            errorMessage: `비밀번호는 ${errMsgMatch[validType]} 포함해야 합니다.`,
          });
        return false;
      }
    }

    if (pwLength >= MIN_PW_LENGTH) return true;
    else {
      if (setErrorMsg)
        this.setState({
          errorMessage: pwLength ? "비밀번호는 8자리 이상입니다." : "",
        });
      return false;
    }
  };

  validateId = (id) => {
    const validIdRegExp = /\w@\w+\.\w/i;
    return id.match(validIdRegExp) ? true : false;
  };

  validateInput = () => {};

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const { validateId, validatePw } = this;
    let isValidId = name === "inputId" ? validateId(value) : validateId(this.state.inputId);
    let isValidPw = name === "inputId" ? validatePw(this.state.inputPw) : validatePw(value);
    let isValidInput = isValidId && isValidPw;

    if (isValidInput) this.setState({ errorMessage: "" });
    if (isValidPw && !isValidId) this.setState({ errorMessage: "올바른 이메일을 입력해 주세요." });

    this.setState({
      [name]: value,
    });
  };

  hello = () => {
    console.log("hi!");
  };

  render() {
    const { inputId, inputPw, errorMessage } = this.state;
    const isValidId = this.validateId(inputId);
    const isValidPw = this.validatePw(inputPw, false);

    return (
      <section className="Login">
        <header className="title-box">
          <img src="images/janghyeonlee/westagram_big.png" alt="westagram logo" />
        </header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={`id ${isValidId ? "correct-input" : ""}`}
            name="inputId"
            placeholder="이메일을 입력해주세요."
            value={inputId}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            className={`password ${isValidPw ? "correct-input" : ""}`}
            name="inputPw"
            placeholder="비밀번호"
            value={inputPw}
            onChange={this.handleInputChange}
          />
          <p className={`valid-check-message ${errorMessage ? "show-error-message" : ""}`}>{errorMessage}</p>
          <button
            className={`login-button ${isValidId && isValidPw ? "allow-login" : ""}`}
            disabled={!(isValidId && isValidPw)}
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
