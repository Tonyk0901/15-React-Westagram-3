import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import './Login.scss'
import "../../../Styles/reset.scss"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id:"",
      password:"",
      hiddenPW: true,
      productList: [],
    }
  }
  
  //버튼활성화
  handleInputValueChange = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  };break;
  
  //ID,password 조건
  checkValidation = (e) => {
    e.preventDefault();
    const { id, password } = this.state;
    const checkId = id.includes("@");
    const checkPw = password.length >= 4;

    if ( checkId && checkPw ) {
      return window.location.href='./mainLim'
    }
    if (!checkId) {
      alert("아이디는 @을 포함해야합니다");
    }
    if (!checkPw) {
      alert("비밀번호는 4자리 이상 이어야 합니다");
    }
  }; 

  render() {
    const { id, password } = this.state;
    const activateBtn = (this.state.id.length && this.state.password.length) !== 0;

    return (
      <div id= "wrapper">
        <div className="container">
          <div className="form-data">
            <form action="">
              <div className="logo">
                <h1 className="westaLogo">Westagram</h1>
              </div>
              <input 
                id="id" 
                type="text" 
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={ id }
                onChange={this.handleInputValueChange}
                />
              <input 
                id="password"
                placeholder="비밀번호"
                type="password"
                value={ password }
                onChange={this.handleInputValueChange}
                />
              <button to="/main"
                    className={activateBtn ? "form-btn active" : "form-btn"} 
                    type="submit"
                    onClick={this.checkValidation}
                    >로그인</button>
              <span className="has-separator">또는</span>
              <Link to ="/" className="facebook-login" >
                <i className="fab fa -facebook"></i> 
                <img alt = "logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQwOC43ODggNDA4Ljc4OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDA4Ljc4OCA0MDguNzg4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBzdHlsZT0iZmlsbDojNDc1OTkzOyIgZD0iTTM1My43MDEsMEg1NS4wODdDMjQuNjY1LDAsMC4wMDIsMjQuNjYyLDAuMDAyLDU1LjA4NXYyOTguNjE2YzAsMzAuNDIzLDI0LjY2Miw1NS4wODUsNTUuMDg1LDU1LjA4NQ0KCWgxNDcuMjc1bDAuMjUxLTE0Ni4wNzhoLTM3Ljk1MWMtNC45MzIsMC04LjkzNS0zLjk4OC04Ljk1NC04LjkybC0wLjE4Mi00Ny4wODdjLTAuMDE5LTQuOTU5LDMuOTk2LTguOTg5LDguOTU1LTguOTg5aDM3Ljg4Mg0KCXYtNDUuNDk4YzAtNTIuOCwzMi4yNDctODEuNTUsNzkuMzQ4LTgxLjU1aDM4LjY1YzQuOTQ1LDAsOC45NTUsNC4wMDksOC45NTUsOC45NTV2MzkuNzA0YzAsNC45NDQtNC4wMDcsOC45NTItOC45NSw4Ljk1NQ0KCWwtMjMuNzE5LDAuMDExYy0yNS42MTUsMC0zMC41NzUsMTIuMTcyLTMwLjU3NSwzMC4wMzV2MzkuMzg5aDU2LjI4NWM1LjM2MywwLDkuNTI0LDQuNjgzLDguODkyLDEwLjAwOWwtNS41ODEsNDcuMDg3DQoJYy0wLjUzNCw0LjUwNi00LjM1NSw3LjkwMS04Ljg5Miw3LjkwMWgtNTAuNDUzbC0wLjI1MSwxNDYuMDc4aDg3LjYzMWMzMC40MjIsMCw1NS4wODQtMjQuNjYyLDU1LjA4NC01NS4wODRWNTUuMDg1DQoJQzQwOC43ODYsMjQuNjYyLDM4NC4xMjQsMCwzNTMuNzAxLDB6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />&nbsp;&nbsp;Facebook으로 로그인
              </Link>
              <Link to="/" className="password-reset">비밀번호를 잊으셨나요?</Link>
            </form>
          </div>
        </div>
      </div>
)
    }
}

export default Login;