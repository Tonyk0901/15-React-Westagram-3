import React, { Component } from "react";
import Feed from "./Components/Feed";
import Comment from "./Components/Comment";
import "./Main.scss";
import "../Common.scss";

class MainIm extends Component {
  render() {
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
            <Comment />
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
              <li className="userNum">
                <div className="reco_user_profile">
                  <img
                    src="https://instagram.fmel5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmel5-1.fna.fbcdn.net&_nc_ohc=eJfynleCkQkAX_-ylC_&oh=dd98355110e51a60683901deb4937ce4&oe=5FE54B0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                    className="recommend_user_picture"
                    alt="recommend_user_picture"
                  />
                  <div>
                    <p className="userID">aaaa</p>
                    <p className="follow_desc">abc님 외 3명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="follow">팔로우</p>
              </li>
              <li className="userNum">
                <div className="reco_user_profile">
                  <img
                    src="https://instagram.fmel5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmel5-1.fna.fbcdn.net&_nc_ohc=eJfynleCkQkAX_-ylC_&oh=dd98355110e51a60683901deb4937ce4&oe=5FE54B0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                    className="recommend_user_picture"
                    alt="recommend_user_picture"
                  />
                  <div>
                    <p className="userID">bb</p>
                    <p className="follow_desc">abc님 외 132명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="follow">팔로우</p>
              </li>
              <li className="userNum">
                <div className="reco_user_profile">
                  <img
                    src="https://instagram.fmel5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmel5-1.fna.fbcdn.net&_nc_ohc=eJfynleCkQkAX_-ylC_&oh=dd98355110e51a60683901deb4937ce4&oe=5FE54B0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                    className="recommend_user_picture"
                    alt="recommend_user_picture"
                  />
                  <div>
                    <p className="userID">ccccccccc</p>
                    <p className="follow_desc">abc님 외 33명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="follow">팔로우</p>
              </li>
              <li className="userNum">
                <div className="reco_user_profile">
                  <img
                    src="https://instagram.fmel5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmel5-1.fna.fbcdn.net&_nc_ohc=eJfynleCkQkAX_-ylC_&oh=dd98355110e51a60683901deb4937ce4&oe=5FE54B0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                    className="recommend_user_picture"
                    alt="recommend_user_picture"
                  />
                  <div>
                    <p className="userID">dddddddd</p>
                    <p className="follow_desc">abc님 외 7명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="follow">팔로우</p>
              </li>
              <li className="userNum">
                <div className="reco_user_profile">
                  <img
                    src="https://instagram.fmel5-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fmel5-1.fna.fbcdn.net&_nc_ohc=eJfynleCkQkAX_-ylC_&oh=dd98355110e51a60683901deb4937ce4&oe=5FE54B0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                    className="recommend_user_picture"
                    alt="recommend_user_picture"
                  />
                  <div>
                    <p className="userID">eeee</p>
                    <p className="follow_desc">abc님 외 9명이 팔로우합니다</p>
                  </div>
                </div>
                <p className="follow">팔로우</p>
              </li>
            </ul>
            <footer className="foot">
              <ul className="footer_ul">
                <li>소개</li>
                <li>도움말</li>
                <li>홍보 센터</li>
                <li>API</li>
                <li>채용 정보</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>위치</li>
                <li>인기 계정</li>
                <li>해시태그</li>
                <li>언어</li>
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
