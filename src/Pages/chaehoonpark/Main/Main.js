import React from "react";
import "./Main.scss";
import CommentPart from "./CommentPart";

class MainPark extends React.Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
    };
  }

  render() {
    return (
      <main-page>
        <nav>
          <div className="header">
            <div className="left-nav">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/87/87390.svg"
                alt=""
                className="ig-logo"
                width="25px"
                height="25px"
              />
              <span className="westagram">westagram</span>
            </div>
            <div className="input-box">
              <input type="text" placeholder="검색" />
            </div>
            <div className="menu-bar">
              <a href="">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt=""
                  className="images"
                />
              </a>
              <a href="">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt=""
                  className="images"
                />
              </a>
              <a href="">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt=""
                  className="images"
                />
              </a>
            </div>
          </div>
        </nav>
        <main>
          <div className="feeds">
            <article>
              <div className="header">
                <div className="profile">
                  <div>
                    <img
                      src="https://www.flaticon.com/svg/static/icons/svg/87/87390.svg"
                      alt=""
                      width="30px"
                      height="30px"
                      className="profileImg"
                    />
                  </div>
                  <div className="article-header-writer-and-place">
                    <div className="writer">chaehoon.p</div>
                    <div className="place">어딘 가에...</div>
                  </div>
                </div>
                <div className="article-header-option">
                  <img
                    className="article-header-option-className"
                    src="https://media.istockphoto.com/vectors/three-dots-icon-element-of-minimalistic-icon-for-mobile-concept-and-vector-id948776182"
                    alt="option-icon"
                    width="24px"
                  />
                </div>
              </div>
              <div className="content-box">
                <img className="content" src="/images/chaehoonpark/narr.jpg" alt="cat-photo" width="100%" />
              </div>
              <div className="Expressions">
                <div className="first-column">
                  <div>
                    <img
                      className="like-comment-share-bookmark heart"
                      src="https://i.pinimg.com/originals/49/85/1c/49851c166722c7cb9f9cf905f617e266.png"
                      alt="heart"
                    />
                  </div>
                  <div>
                    <img
                      className="like-comment-share-bookmark comment"
                      src="https://w7.pngwing.com/pngs/60/100/png-transparent-computer-icons-online-chat-oval-bubbles-miscellaneous-speech-balloon-monochrome.png"
                      alt="comment"
                    />
                  </div>
                  <div>
                    <img
                      className="like-comment-share-bookmark"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLcfh1-iDCHjpr1tCuesBYfPjgcOPczHdTA&usqp=CAU"
                      alt="share"
                    />
                  </div>
                </div>
                <div>
                  <img
                    className="like-comment-share-bookmark bookmark"
                    src="data:image/png;base64,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"
                    alt="bookmark"
                  />
                </div>
              </div>
              <div className="fourth-row">
                <div className="article-fourth-row-img-box">
                  <img
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/65837970_483107762493750_1514453576498282496_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bCeAcFoYRsIAX-XLotA&tp=1&oh=f029aae59ce22ea08b56e2b30e276215&oe=5FEA2502"
                    alt="profile-picture"
                    className="article-fourth-row-img"
                  />
                </div>
                <div>
                  <span className="username-bold">chaehoon.p</span>
                  <span>님 외 10명이 좋아합니다</span>
                </div>
              </div>
              <CommentPart></CommentPart>
            </article>
          </div>
          <div className="main-right">
            <div className="user-info">
              <div className="user-info-img-box">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/65837970_483107762493750_1514453576498282496_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bCeAcFoYRsIAX-XLotA&tp=1&oh=f029aae59ce22ea08b56e2b30e276215&oe=5FEA2502"
                  alt="user-info-img"
                  className="img"
                />
              </div>
              <div className="id-and-name">
                <div>
                  <span>chaehoon.p</span>
                </div>
                <div>
                  <span>박채훈</span>
                </div>
              </div>
            </div>
            <div className="story-section">
              <header>
                <div>
                  <span>스토리</span>
                </div>
                <div>
                  <span>모두 보기</span>
                </div>
              </header>
              <div className="story-section-user-list">
                <div className="story-section-user-img-box">
                  <img
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/65837970_483107762493750_1514453576498282496_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bCeAcFoYRsIAX-XLotA&tp=1&oh=f029aae59ce22ea08b56e2b30e276215&oe=5FEA2502"
                    alt=""
                    width="30px"
                    height="30px"
                    className="story-section-user-img"
                  />
                </div>
                <div className="article-header-writer-and-place">
                  <div className="article-header-writer">chaehoon.p</div>
                  <div className="article-header-place">5시간 전</div>
                </div>
              </div>
            </div>
            <div className="recommendation-for-users-box">
              <header>
                <div>
                  <span>회원님을 위한 추천</span>
                </div>
                <div>
                  <span>모두 보기</span>
                </div>
              </header>
              <div className="story-section-user-list">
                <div className="story-section-user-img-box">
                  <img
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/65837970_483107762493750_1514453576498282496_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=bCeAcFoYRsIAX-XLotA&tp=1&oh=f029aae59ce22ea08b56e2b30e276215&oe=5FEA2502"
                    alt=""
                    width="30px"
                    height="30px"
                    className="story-section-user-img"
                  />
                </div>
                <div className="article-header-writer-and-place">
                  <div className="article-header-writer">chaehoon.p</div>
                  <div className="article-header-place">5시간 전</div>
                </div>
              </div>
            </div>
            <footer>
              <span>
                소개 도움말 홍보 센터 API 채용 정보 개인정보처리방침 약관 위치 인기 계정 해시태그 언어
                <br />© 2020 INSTAGRAM FROM FACEBOOK
              </span>
            </footer>
          </div>
        </main>
      </main-page>
    );
  }
}

export default MainPark;
