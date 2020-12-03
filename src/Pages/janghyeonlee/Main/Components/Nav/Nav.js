import React, { Component } from "react";
import FilteredUserList from "./Components/FilteredUserList";
import "./Nav.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      usersData: [],
      showNavUserModal: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/images/janghyeonlee/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          usersData: res.usersData,
        });
      });
  }

  handleInputChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <nav>
        <ul className="nav-container">
          <li className="nav-logo">
            <img src="images/janghyeonlee/westagram.png" alt="westagram logo" />
          </li>
          <li className="nav-search">
            <input
              type="text"
              className="nav-search westa-border"
              placeholder="검색"
              onChange={this.handleInputChange}
            />
            <section
              className="nav-search-modal westa-border"
              style={this.state.searchInput ? { display: "block" } : { display: "none" }}
            >
              <FilteredUserList usersData={this.state.usersData} keyword={this.state.searchInput} />
            </section>
          </li>
          <li className="nav-icons">
            <img className="nav-icon" src="images/janghyeonlee/home.png" alt="nav icon home" />
            <img className="nav-icon" src="images/janghyeonlee/send.png" alt="nav icon send" />
            <img className="nav-icon" src="images/janghyeonlee/compass.png" alt="nav icon compass" />
            <img className="nav-icon" src="images/janghyeonlee/heart.png" alt="nav icon heart" />
            <div className="nav-icon">
              <img
                className="nav-icon-profile"
                src="images/janghyeonlee/my_profile.jpg"
                alt="my profile"
                onClick={() => this.setState({ showNavUserModal: !this.state.showNavUserModal })}
              />
              <section
                className="nav-profile-modal"
                style={this.state.showNavUserModal ? { display: "block" } : { display: "none" }}
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
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
