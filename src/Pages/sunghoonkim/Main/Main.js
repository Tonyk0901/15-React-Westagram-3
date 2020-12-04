import React from "react";
import Comment from "./Components/Comment.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Fontawesome Icons
import { faCompass as farCompass } from "@fortawesome/free-regular-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots as farCircle } from "@fortawesome/free-regular-svg-icons";
import { faCaretSquareUp as farCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faSearch as fasSearch } from "@fortawesome/free-solid-svg-icons";

import "./Main.scss";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      commentInputValue: "",
      comments: [{ id: 0, usrId: "sunghoon__kim", comment: "haha", timeCommentPosted: new Date(2020, 11, 2) }],
      timeFeedPosted: new Date(2020, 10, 30),
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    const { comments, commentInputValue } = this.state;
    comments.push({
      id: comments.length,
      usrId: "younggwang__kim",
      comment: commentInputValue,
      timeCommentPosted: new Date(),
    });
    this.setState({
      comments,
      commentInputValue: "",
    });
  };

  updateComment = (event) => {
    this.setState({
      commentInputValue: event.target.value,
    });
  };

  render() {
    const { id, commentInputValue, comments, timeFeedPosted } = this.state;

    return (
      <div className="MainKim">
        <nav>
          <div className="nav-wrapper">
            <div className="nav-logos">
              <a className="delete-hyper-link" href="/">
                <img src="images/sunghoonkim/insta_logo.svg" alt="instagram-logo" />
                <span>Westagram</span>
              </a>
            </div>
            <div className="nav-input-container">
              <FontAwesomeIcon className="faIcon" icon={fasSearch} />
              <input placeholder="검색" />
            </div>
            <ul className="nav-menu-icons">
              <li>
                <FontAwesomeIcon className="faIcon add-cursor" icon={farCompass} />
              </li>
              <li>
                <FontAwesomeIcon className="faIcon add-cursor" icon={farHeart} />
              </li>
              <li>
                <FontAwesomeIcon className="faIcon add-cursor" icon={farUser} />
              </li>
            </ul>
          </div>
        </nav>
        <main className="feeds-main">
          <div className="feeds">
            <article>
              <header className="feed-header">
                <div className="feed-header-column">
                  <a className="delete-hyper-link" href="/">
                    <img src="images/sunghoonkim/iuProfilePic.jpeg" alt="IU" />
                  </a>
                  <a className="delete-hyper-link" href="/">
                    <span className="feed-header-profilename strong-font">dlwlrma</span>
                  </a>
                </div>
                <div className="feed-header-column add-cursor">
                  <FontAwesomeIcon className="faIcon" icon={fasCircle} />
                  <FontAwesomeIcon className="faIcon" icon={fasCircle} />
                  <FontAwesomeIcon className="faIcon" icon={fasCircle} />
                </div>
              </header>
              <img className="feed-image" src="images/sunghoonkim/iuImageSample1.jpg" alt="IU" />
              <section className="feed-buttons">
                <div className="feed-buttons-column">
                  <FontAwesomeIcon className="faIcon fasHeart" icon={fasHeart} />
                  <FontAwesomeIcon className="faIcon" icon={farCircle} />
                  <FontAwesomeIcon className="faIcon" icon={farCaretSquareUp} />
                </div>
                <div className="feed-buttons-column">
                  <FontAwesomeIcon className="faIcon" icon={farBookmark} />
                </div>
              </section>
              <section className="feed-likes">
                <img src="images/sunghoonkim/iuImageSample2.jpg" alt="IU" />
                <span>
                  <strong>sunghoon_kim</strong>
                  <span>&nbsp;님이</span>
                  <strong>&nbsp;매우</strong>
                  <span>&nbsp;좋아합니다.</span>
                </span>
              </section>
              <section className="feed-contents">
                <div>
                  <strong>dlwlrma</strong>
                  <span>&nbsp;5th mini album&nbsp;</span>
                  <Link to="/MainKim" className="delete-hyper-link">
                    <span className="hashTag">#Lovepoem</span>
                  </Link>
                  <span className="light-font add-cursor">&nbsp;더 보기</span>
                </div>
              </section>
              <section className="feed-comments">
                <div className="feed-comment">
                  <Comment key={id} comments={comments} timeFeedPosted={timeFeedPosted} />
                </div>
                <form className="feed-comment-input">
                  <input
                    className="feed-comment-input-content"
                    onChange={this.updateComment}
                    placeholder="댓글 달기..."
                    value={commentInputValue}
                  />
                  <button
                    className="feed-comment-input-button"
                    onClick={this.handleClick}
                    disabled={commentInputValue ? false : true}
                  >
                    게시
                  </button>
                </form>
              </section>
            </article>
          </div>
          <div className="main-right">
            <section className="main-right-profiles">
              <img src="images/sunghoonkim/iuImageSample2.jpg" alt="IU" />
              <div className="main-right-profile-column">
                <div className="main-right-profile-name strong-font">sunghoon_kim</div>
                <div className="main-right-profile-desc light-font">징쨩 | 커여웡</div>
              </div>
            </section>
            <section className="main-right-stories">
              <header className="main-right-story-header">
                <div className="main-right-story-header-column light-font">스토리</div>
                <div className="main-right-story-header-column strong-font add-cursor">모두 보기</div>
              </header>
              <section className="main-right-story">
                <div className="main-right-story-body">
                  <img src="images/sunghoonkim/iuImageSample3.jpg" alt="IU" />
                  <div className="main-right-story-column">
                    <div className="main-right-story-column-name strong-font">sunghoon_kim</div>
                    <div className="main-right-story-column-timetag light-font">12분전</div>
                  </div>
                </div>
                <div className="main-right-story-body">
                  <img src="images/sunghoonkim/iuImageSample3.jpg" alt="IU" />
                  <div className="main-right-story-column">
                    <div className="main-right-story-column-name strong-font">sunghoon_kim</div>
                    <div className="main-right-story-column-timetag light-font">12분전</div>
                  </div>
                </div>
                <div className="main-right-story-body">
                  <img src="images/sunghoonkim/iuImageSample3.jpg" alt="IU" />
                  <div className="main-right-story-column">
                    <div className="main-right-story-column-name strong-font">sunghoon_kim</div>
                    <div className="main-right-story-column-timetag light-font">12분전</div>
                  </div>
                </div>
              </section>
            </section>
            <section className="main-right-recommends">
              <header>
                <div className="main-right-recommend-header-column light-font">회원님을 위한 추천</div>
                <div className="main-right-recommend-header-column strong-font add-cursor">모두 보기</div>
              </header>
              <section>
                <div className="main-right-recommend-body">
                  <div className="main-right-recommend-bigcolumn">
                    <img src="images/sunghoonkim/iuImageSample4.jpg" alt="IU" />
                    <div className="main-right-recommend-column">
                      <div className="main-right-recommend-column-name strong-font">sunghoon_kim</div>
                      <div className="main-right-recommend-column-timetag light-font">테스트용텍스트입니다.</div>
                    </div>
                  </div>
                  <div className="main-right-recommend-bigcolumn">
                    <Link to="/MainKim">팔로우</Link>
                  </div>
                </div>
                <div className="main-right-recommend-body">
                  <div className="main-right-recommend-bigcolumn">
                    <img src="images/sunghoonkim/iuImageSample4.jpg" alt="IU" />
                    <div className="main-right-recommend-column">
                      <div className="main-right-recommend-column-name strong-font">sunghoon_kim</div>
                      <div className="main-right-recommend-column-timetag light-font">테스트용텍스트입니다.</div>
                    </div>
                  </div>
                  <div className="main-right-recommend-bigcolumn">
                    <Link to="/MainKim">팔로우</Link>
                  </div>
                </div>
                <div className="main-right-recommend-body">
                  <div className="main-right-recommend-bigcolumn">
                    <img src="images/sunghoonkim/iuImageSample4.jpg" alt="IU" />
                    <div className="main-right-recommend-column">
                      <div className="main-right-recommend-column-name strong-font">sunghoon_kim</div>
                      <div className="main-right-recommend-column-timetag light-font">테스트용텍스트입니다.</div>
                    </div>
                  </div>
                  <div className="main-right-recommend-bigcolumn">
                    <Link to="/MainKim">팔로우</Link>
                  </div>
                </div>
              </section>
            </section>
            <footer className="main-right-footers">
              <ul>
                <li>
                  <a href="/" className="light-font delete-hyper-link">
                    Instagram정보&nbsp;·&nbsp;
                  </a>
                </li>
                <li>
                  <a href="/" className="light-font delete-hyper-link">
                    지원&nbsp;·&nbsp;
                  </a>
                </li>
                <li>
                  <a href="/" className="light-font delete-hyper-link">
                    홍보센터&nbsp;·&nbsp;
                  </a>
                </li>
                <li>
                  <a href="/" className="light-font delete-hyper-link">
                    API&nbsp;·&nbsp;
                  </a>
                </li>
                <li>
                  <a href="/" className="light-font delete-hyper-link">
                    채용정보&nbsp;·&nbsp;
                  </a>
                </li>
                <li>
                  <a href="/" className="light-font delete-hyper-link">
                    개인정보처리방침&nbsp;
                  </a>
                </li>
              </ul>
              <span className="light-font">© 2019 INSTAGRAM</span>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
