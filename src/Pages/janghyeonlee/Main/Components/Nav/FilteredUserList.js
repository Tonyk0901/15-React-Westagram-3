import React, { Component } from "react";
import "./FilteredUserList.scss";

class FilteredUserList extends Component {
  render() {
    return (
      <>
        {this.props.usersData
          .filter((user) => user.userId.includes(this.props.keyword))
          .map((user) => (
            <div key={user.key} className="user-in-nav-search-modal">
              <div className="id">{user.userId}</div>
              <div className="intro">{user.userIntro}</div>
            </div>
          ))}
      </>
    );
  }
}

export default FilteredUserList;
