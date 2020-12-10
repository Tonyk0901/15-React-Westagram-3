import React, { Component } from "react";
import Feed from "./Components/Feed";
import "./Main.scss";

class MainIm extends Component {
  constructor() {
    super();
    this.state = {
      footerList: [],
      asideFollowList: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/daehoim/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          footerList: res.footer,
          asideFollowList: res.asideData,
        });
      });
  }
  render() {
    const { footerList, asideFollowList } = this.state;
    return (
      <>
        <nav className="nav_bar">
          <div>
            <div className="nav_logos">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt="logo_img" />
              <span>Westagram</span>
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
        <main className="main_container">
          <article className="feed_box">
            <Feed />
          </article>
          <aside className="main_right">
            <div className="my_profile">
              <img
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/46339276_721891531523670_514643747573596160_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=BvXi93YoSq0AX9ZRkGt&tp=1&oh=2eda327f827530b39690d8ed33b6ab63&oe=5FE6308E"
                className="my_profile_picture"
                alt="my_profile_picture"
              />
              <div className="profile">
                <p className="myID" id="myID">
                  daehoieem
                </p>
                <p className="myName" id="myName">
                  대호
                </p>
              </div>
              <p className="switchID">전환</p>
            </div>
            <div className="recommend">
              <div className="recommendationForYou">
                <p>회원님을 위한 추천</p>
                <span className="seeAll">모두 보기</span>
              </div>
            </div>
            <ul className="recommend_user">
              {asideFollowList.map((el) => {
                return (
                  <li className="userNum">
                    <div className="reco_user_profile">
                      <img src={el.imgSrc} className="recommend_user_picture" alt="recommend_user_picture" />

                      <div>
                        <p className="userID">{el.userID}</p>
                        <p className="follow_desc">daehoieem님 외 {el.numOfFollow}명이 팔로우합니다</p>
                      </div>
                    </div>
                    <p className="follow">팔로우</p>
                  </li>
                );
              })}
            </ul>
            <footer className="foot">
              <ul className="footer_ul">
                {footerList.map((el) => {
                  return <li id={el.id}>{el.content}</li>;
                })}
              </ul>
              <p className="inc">© 2020 INSTAGRAM FROM FACEBOOK</p>
            </footer>
          </aside>
        </main>
      </>
    );
  }
}
export default MainIm;
