import React, { Component } from "react";
import RecommendUser from "./RecommendUser";
import "./Aside.scss";

class Aside extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recommendUsersData: [],
      footerData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/images/janghyeonlee/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          recommendUsersData: res.recommendUsersData,
          footerData: res.footerData,
        });
      });
  }

  render() {
    const recommendUsers = this.state.recommendUsersData.map(({ key, imgUrl, userId }) => {
      return <RecommendUser imgUrl={imgUrl} userId={userId} key={key} />;
    });
    const footerLinks = this.state.footerData.map((data, idx, arr) => {
      return (
        <span key={idx}>
          <a href="/">{data}</a>
          {arr.length === idx + 1 ? "" : " · "}
        </span>
      );
    });
    return (
      <aside className="fixed-aside">
        <section className="aside-current-user-box">
          <div className="aside-current-user-info">
            <figure className="aside-current-user-profile">
              <img src="images/janghyeonlee/my_profile.jpg" alt="myprofile" />
            </figure>
            <div className="aside-current-user-text-info">
              <p className="aside-current-user-id">jhyeon_300</p>
              <p className="aside-current-user-name">이장현</p>
            </div>
          </div>
          <button>전환</button>
        </section>
        <section className="aside-recommend-box">
          <header className="aside-recommend-title-box">
            <p className="aside-recommend-for-user">회원님을 위한 추천</p>
            <button>모두 보기</button>
          </header>
          {recommendUsers}
        </section>
        <footer>
          <small>{footerLinks}</small>
          <small>© 2020 WESTAGRAM FROM JHEYON</small>
        </footer>
      </aside>
    );
  }
}

export default Aside;
