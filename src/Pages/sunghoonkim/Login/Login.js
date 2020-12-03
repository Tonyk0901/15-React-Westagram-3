import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <main className="LoginKim">
        <div>
          <h1>Westagram</h1>
          <form>
            <input className="login-form-input" id="login-id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
            <input className="login-form-input" id="login-password" type="password" placeholder="비밀번호" />
            <Link to={{
              pathname: '/MainKim',
              loggedIn: true
            }}>
              <button className="login-form-button" type="button">로그인</button>
            </Link>
          </form>
          <section className="add-cursor">비밀번호를 잊으셨나요?</section>
        </div>
      </main >
    )

  }
}

export default Login;