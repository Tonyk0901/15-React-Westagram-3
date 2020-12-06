import React, { Component } from "react";
import "./ProfileModal.scss";

class ProfileModal extends Component {
  render() {
    return (
      <section className={`nav-profile-modal ${this.props.showNavUserModal ? "show-modal" : ""}`}>
        <ul>
          <li>프로필</li>
          <li>저장됨</li>
          <li>설정</li>
          <li className="logout">로그아웃</li>
        </ul>
      </section>
    );
  }
}

export default ProfileModal;
