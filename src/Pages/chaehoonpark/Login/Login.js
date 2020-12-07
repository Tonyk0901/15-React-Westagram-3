import React from "react";
import "./Login.scss";

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
    console.log("handleIdPasswordInput activated");
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  showPassword = () => {
    console.log("showPassword activated");
    this.setState(
      {
        hiddenPW: !this.state.hiddenPW,
      },
      console.log(this.state.hiddenPW),
    );
  };

  checkValidation = (e) => {
    console.log("checkValidation activated");
    e.preventDefault();
    const { id, pw } = this.state;
    const idValid = id.includes("@");
    const pwValid = pw.length >= 5;

    if (idValid && pwValid) {
      alert("로그인 성공");
      this.props.history.push("/MainPark");
    }
    // if (!idValid) {
    //   alert("ID 에 @ 가 없습니다");
    // }
    // if (!pwValid) {
    //   alert("PW 에 충분히 값을 넣어주세용");
    // }
    // 이거 안해도 어차피 조건에 따라서 button:disabled 가 되기 때문에 필요는 없음
  };

  render() {
    console.log(this.state);
    const { id, pw, hiddenPW } = this.state; // 이렇게 선언하면 this.state 을 일일히 붙여줄 필요도 없어짐
    const idValid = id.includes("@");
    const pwValid = pw.length >= 5;
    return (
      <>
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
                          disabled={idValid && pwValid ? false : true}
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
                <a href="www.naver.com">비밀번호를 잊으셨나요?</a>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPark;
