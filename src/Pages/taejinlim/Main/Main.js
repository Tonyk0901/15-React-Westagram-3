import React, {Component} from 'react'; 
import './Main.scss'
import "../../../Styles/reset.scss"
import { faBookmark, faComment, faCompass, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <div className="Main_container">
        <div className="header">
          <nav className="nav_container">
            <div className="logo_left">
              <div className="logo_text">
                <a>Westagram</a>
              </div>
            </div>
            <div className="search_bar">
              <input value="검색"></input>
              <span><FontAwesomeIcon className="fas" icon={faSearch} /></span>
            </div>
            <div className="logo_right">
              <FontAwesomeIcon className="far" icon={faCompass} /><FontAwesomeIcon className="far" icon={faHeart} /><img src="images/taejinlim/model.jpg"></img>
            </div>
          </nav>        
        </div>
        <div className="main_container">
          <div className="center_container">
            <div className="feeds_container">
              <div className="feeds_stories">
                <div className="stories_array"><img alt="" src="images/taejinlim/model.jpg"></img></div>
              </div>
              <article className="article_box">
                <div className="art_header">
                  <div className="user_info"><img src="images/taejinlim/model.jpg"></img><span>Armand_official</span></div>
                  <div className="dot"><FontAwesomeIcon className="fas" icon={faEllipsisH} /></div>
                </div>
                <div className="art_img"><img src="images/taejinlim/smoke2.jpg"></img></div>
                <footer className="art_footer">
                  <div className="art_icon">
                    <div className="icon_left">
                      <FontAwesomeIcon className="far" icon={faHeart} /><FontAwesomeIcon className="far" icon={faComment} /><FontAwesomeIcon className="far" icon={faPaperPlane} />
                    </div>
                    <div className="icon_right">
                      <FontAwesomeIcon className="far" icon={faBookmark} />
                    </div>
                  </div>
                  <div className="art_like">
                    <img src="images/taejinlim/model.jpg" />
                    <span><a>Armand_official</a>님 <a>외 40만명</a>이 좋아합니다</span>  
                  </div>
                  <div className="art_text">
                    <span><a>Armand_official</a> &nbsp;React..Shit..</span>
                  </div>
                  <div className="minute"><span>1분 전</span></div>
                  <div className="art_reply">
                    <input className="reply" type="text" placeholder="댓글 달기..."></input>
                    <input className="button" type="button" value="게시" />
                  </div>
                </footer>
              </article>
            </div>
            <div className="main_right">
              <div className="right_info">
                <div className="aside_logo">
                  <div className="as_logo_left">
                    <img src="images/taejinlim/model.jpg"></img><span>Armand_official</span>
                  </div>
                  <div className="as_logo_right"><span>전환</span></div>
                </div>
                <div className="aside_up">
                  <span className="recommend">회원님을 위한 추천</span>
                  <span className="look_all">모두 보기</span>
                </div>
                <div className="aside_down">
                  <div className="recommend">
                    <div className="recommend_info">
                      <img src="images/taejinlim/chanel2.jpg"></img><span>chanelofficial</span>
                    </div>
                    <div className="recommend_fw"><span>팔로우</span></div>
                  </div>
                  <div className="recommend">
                    <div className="recommend_info">
                      <img src="images/taejinlim/ader.jpg"></img><span>adererror_official</span>
                    </div>
                    <div className="recommend_fw"><span>팔로우</span></div>
                  </div>
                  <div className="recommend">
                    <div className="recommend_info">
                      <img src="images/taejinlim/cardiB2.jpg"></img><span>iamcardib</span>
                    </div>
                    <div className="recommend_fw"><span>팔로우</span></div>
                  </div>
                  <div className="recommend">
                    <div className="recommend_info">
                      <img src="images/taejinlim/tyga.jpg"></img><span>tyga</span>
                    </div>
                    <div className="recommend_fw"><span>팔로우</span></div>
                  </div>
                  <div className="recommend">
                    <div className="recommend_info">
                      <img src="images/taejinlim/balen.jpg"></img><span>balenciaga</span>
                    </div>
                    <div className="recommend_fw"><span>팔로우</span></div>
                  </div>
                </div>
                <footer className="aside_footer">
                  <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
)
    }
}

export default Main;