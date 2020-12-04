import React, { Component } from "react";
import "./FilteredUserList.scss";

class FilteredUserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredUsersData: this.props.usersData,
    };
  }

  generateFilteredUserList = (keyword) => {
    let filteredUsersData = [];
    filteredUsersData = this.props.usersData.filter((user) => (user.userId.includes(keyword) ? true : false));

    const usersData = filteredUsersData;
    return usersData.map((user) => {
      // key={user.key}를 넣어줘야 하는 이유? 리액트 맨날 unique한 key를 요구한다.
      return (
        <div key={user.key} className="user-in-nav-search-modal">
          {user.userId}
        </div>
      );
    });
  };

  render() {
    return <>{this.generateFilteredUserList(this.props.keyword)}</>;
  }
}

export default FilteredUserList;
