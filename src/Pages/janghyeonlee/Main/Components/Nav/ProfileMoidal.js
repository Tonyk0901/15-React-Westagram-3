import React, { Component } from "react";
import "./ProfileModal.scss";

class ProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section
        className="nav-profile-modal"
        style={this.props.showNavUserModal ? { display: "block" } : { display: "none" }}
      >
        <div className="nav-profile-modal-profile">
          <span>
            <i className="far fa-user-circle"></i> 프로필
          </span>
        </div>
        <div className="nav-profile-modal-saved">
          <span>
            <i className="far fa-bookmark"></i> 저장됨
          </span>
        </div>
        <div className="nav-profile modal-setting">
          <span>
            <i className="fas fa-cog"></i> 설정
          </span>
        </div>
        <div className="nav-profile-modal-logout">로그아웃</div>
      </section>
    );
  }
}

export default ProfileModal;
