import React from "react";
import "./Login.scss";

const API = "http://3.35.19.3:8000/account/signin";

class LoginPark extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      hiddenPW: true,
    };
  }

  handleIdPasswordInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  showPassword = () => {
    this.setState({
      hiddenPW: !this.state.hiddenPW,
    });
  };

  checkValidation = (e) => {
    e.preventDefault();
    const { id, pw } = this.state;
    const idValid = id.includes("@");
    const pwValid = pw.length >= 5;

    if (idValid && pwValid) {
      alert("로그인 성공");
    }

    fetch(API, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "SUCCESS") {
          localStorage.setItem("token", result.Authorization);
          localStorage.setItem("message", result.message);
        }
      });
  };

  render() {
    const { id, pw, hiddenPW } = this.state;
    const idValid = id.includes("@");
    const pwValid = pw.length >= 5;
    return (
      <div className="div-for-display-flex">
        <div className="left_main">
          <img
            src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
            alt="left_main_photo"
          />
        </div>
        <div className="right_main">
          <div className="login_info">
            <h1 className="right-main-header">westagram</h1>
            <div className="input_and_button_box">
              <div>
                <form>
                  <div className="input_and_button_box">
                    <div>
                      <input
                        type="text"
                        name="id"
                        placeholder="전화번호, 사용자 이름 또는 이메일"
                        onChange={this.handleIdPasswordInput}
                      />
                      <div className="pw-container">
                        <input
                          type={hiddenPW ? "password" : "text"}
                          name="pw"
                          placeholder="비밀번호"
                          onChange={this.handleIdPasswordInput}
                        />
                        <span onClick={this.showPassword}>{hiddenPW ? "show" : "hide"}</span>
                      </div>
                    </div>
                    <div className="button">
                      <button
                        className={idValid && pwValid ? "activeBtn" : "inactiveBtn"}
                        disabled={!(idValid && pwValid)}
                        onClick={this.checkValidation}
                      >
                        로그인
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <span className="lost_password">
              <a href="">비밀번호를 잊으셨나요?</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPark;
