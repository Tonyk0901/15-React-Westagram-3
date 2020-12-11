import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      usrId: '',
      usrPw: ''
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  }

  render() {
    const { usrId, usrPw } = this.state;
    const inputValid = (usrId.includes('@') && usrPw.length >= 5);

    return (
      <main className='LoginKim'>
        <div>
          <h1>Westagram</h1>
          <form>
            <input id='usrId' onChange={this.handleChange} type='text' placeholder='전화번호, 사용자 이름 또는 이메일' />
            <input id='usrPw' onChange={this.handleChange} type='password' placeholder='비밀번호' />
            <Link className={`${inputValid ? "active" : "not-active"}`} to='/MainKim'>
              로그인
            </Link>
          </form>
          <section className='add-cursor'>비밀번호를 잊으셨나요?</section>
        </div>
      </main>
    )

  }
}

export default Login;