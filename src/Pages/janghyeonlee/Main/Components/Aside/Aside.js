import React, { Component } from "react";
import RecommendUser from "./RecommendUser";
import "./Aside.scss";

class Aside extends Component {
  render() {
    return (
      <aside className="fixed-aside">
        <section className="current-user-box">
          <div className="user-info">
            <figure className="profile">
              <img src="images/janghyeonlee/my_profile.jpg" alt="myprofile" />
            </figure>
            <div className="text-info">
              <p className="id">jhyeon_300</p>
              <p className="name">이장현</p>
            </div>
          </div>
          <button>전환</button>
        </section>
        <section className="recommend-box">
          <header>
            <p>회원님을 위한 추천</p>
            <button className="show-all">모두 보기</button>
          </header>
          {this.props.recommendUsersData.map(({ key, imgUrl, userId }) => {
            return <RecommendUser imgUrl={imgUrl} userId={userId} key={key} />;
          })}
        </section>
        <footer>
          <small>
            {this.props.footerData.map((data, idx, arr) => {
              return (
                <span key={idx}>
                  <a href="/">{data}</a>
                  {arr.length === idx + 1 ? "" : " · "}
                </span>
              );
            })}
          </small>
          <small>© 2020 WESTAGRAM FROM JHEYON</small>
        </footer>
      </aside>
    );
  }
}

export default Aside;
