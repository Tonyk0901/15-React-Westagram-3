import React from 'react';
import { Link } from "react-router-dom";
import ASIDE_DATA from "./AsideData";
import "./Aside.scss";

class Aside extends React.Component {
  render() {
    const { STORY_DATA, RECOMMEND_DATA, FOOTER_CARDS } = ASIDE_DATA;
    return (
      <div className="AsideKim">
        <div className="wrapper">
          <section className="profiles">
            <img src="images/sunghoonkim/iuImageSample2.jpg" alt="IU" />
            <div className="column">
              <div className="strong-font">sunghoon_kim</div>
              <div className="description light-font">징쨩 | 커여웡</div>
            </div>
          </section>
          <section className="stories">
            <header>
              <div className="light-font">스토리</div>
              <div className="strong-font add-cursor">모두 보기</div>
            </header>
            <section>
              {STORY_DATA.map(({ userId, timeStamp, profilePicture }, index) => {
                return (
                  <div key={index} className="body">
                    <img src={profilePicture} alt="IU" />
                    <div className="column">
                      <div className="strong-font">{userId}</div>
                      <div className="timetag light-font">{timeStamp}</div>
                    </div>
                  </div>
                )
              })}
            </section>
          </section>
          <section className="recommends">
            <header>
              <div className="light-font">회원님을 위한 추천</div>
              <div className="strong-font add-cursor">모두 보기</div>
            </header>
            <section>
              {RECOMMEND_DATA.map(({ userId, profilePicture, description }, index) => {
                return (
                  <div key={index} className="body">
                    <div className="bigcolumn">
                      <img src={profilePicture} alt="IU" />
                      <div className="column">
                        <div className="strong-font">{userId}</div>
                        <div className="timetag light-font">{description}</div>
                      </div>
                    </div>
                    <div className="bigcolumn">
                      <Link to="/MainKim">팔로우</Link>
                    </div>
                  </div>
                )
              })}
            </section>
          </section>
          <footer className="footers">
            <ul>
              {FOOTER_CARDS.map((footerCard, index) => {
                return (
                  <li key={index}>
                    <Link to="/MainKim" className="light-font delete-hyper-link">
                      {footerCard}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <span className="light-font">© 2019 INSTAGRAM</span>
          </footer>
        </div>
      </div >
    );
  }
}

export default Aside;