import React, { Component } from "react";
import FilteredUserList from "./FilteredUserList";
import ProfileModal from "./ProfileMoidal";
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
    fetch("images/janghyeonlee/data.json", {
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

  closeModal = () => {
    if (this.state.showNavUserModal) this.setState({ showNavUserModal: false });
  };

  render() {
    const { searchInput, usersData, showNavUserModal } = this.state;
    return (
      <nav>
        <div className={`modal-container ${showNavUserModal ? "show" : ""}`} onClick={this.closeModal}></div>
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
            <section className={`nav-search-modal westa-border ${searchInput ? "show" : ""}`}>
              <FilteredUserList usersData={usersData} keyword={searchInput} />
            </section>
          </li>
          <li className="nav-icons">
            <img className="nav-icon" src="images/janghyeonlee/home.png" alt="nav icon home" />
            <img className="nav-icon" src="images/janghyeonlee/send.png" alt="nav icon send" />
            <img className="nav-icon" src="images/janghyeonlee/compass.png" alt="nav icon compass" />
            <img className="nav-icon" src="images/janghyeonlee/heart.png" alt="nav icon heart" />
            <div className="nav-icon">
              <img
                className="profile"
                src="images/janghyeonlee/my_profile.jpg"
                alt="my profile"
                onClick={() => this.setState({ showNavUserModal: !showNavUserModal })}
              />
              <ProfileModal showNavUserModal={showNavUserModal} />
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
