import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <>
        <nav className="Nav">
          <div>
            <div className="nav_logos">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt="logo_img" />
              <span>Instagram</span>
            </div>
            <div className="nav_search">
              <input type="text" name="nav_search" id="nav_search" placeholder="검색" />
            </div>
            <div className="nav_more">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore" />
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile" />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
