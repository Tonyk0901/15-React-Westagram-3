import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faComment, faCompass, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH, faSearch } from '@fortawesome/free-solid-svg-icons'; 
import './Main.scss'
import "../../../Styles/reset.scss"


class MainLim extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: ''
    };
  }
  //댓글 게시버튼 활성화
  handelCommentValue = e => {
    this.setState({
      commentValue: e.target.value
    });
  };

  //댓글 기능구현 (조건)
	addComment = e => {
    e.preventDefault();
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          content: commentValue,
        }
      ],
      commentValue: ''
    });
  };

  render() {

    const activateBtn = (this.state.commentValue.length) !== 0;
    const {commentList} = this.state;

    return (
    <>  
      <div className="MainLim">
        <div className="header">
          <nav className="nav_container">
            <div className="logo_left">
              <div className="logo_text">
                <a>Westagram</a>
              </div>
            </div>
            <div className="search_bar">
              <input type="text" placeholder="검색" />
              <span><FontAwesomeIcon className="fas" icon={faSearch} /></span>
            </div>
            <div className="logo_right">
              <FontAwesomeIcon className="far" icon={faCompass} /><FontAwesomeIcon className="far" icon={faHeart} /><img src="images/taejinlim/model.jpg" alt=""></img>
            </div>
          </nav>        
        </div>
        <div className="main_container">
          <div className="center_container">
            <div className="feeds_container">
              <div className="feeds_stories">
                <div className="stories_array"><img src="images/taejinlim/model.jpg" alt=""></img></div>
              </div>
              <article className="article_box">
                <div className="art_header">
                  <div className="user_info"><img src="images/taejinlim/model.jpg" alt=""></img><span>Armand_official</span></div>
                  <div className="dot"><FontAwesomeIcon className="fas" icon={faEllipsisH} /></div>
                </div>
                <div className="art_img"><img src="images/taejinlim/smoke2.jpg" alt=""></img></div>
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
                    <img src="images/taejinlim/model.jpg" alt=""/>
                    <span><a>Armand_official</a>님 <a>외 40만명</a>이 좋아합니다</span>  
                  </div>
                  <div className="art_text">
                    <span><a>Armand_official</a> &nbsp;React..Shit..</span>
                  </div>
                  <div className="minute"><span>1분 전</span></div>
                  <ul>
                    {commentList.map((comment, index) => {
                      return (
                        <li key={index}>
                          <span>Username</span>&nbsp;&nbsp;{comment.content}
                        </li>          
                      )})}
                  </ul>
                  <form className="art_reply" onSubmit={this.addComment}> 
                    <input 
                      className="reply"
                      type="text" 
                      placeholder="댓글 달기..."
                      onChange={this.handelCommentValue}
                      value={this.state.commentValue}
                      />
                    <input 
                      className={activateBtn ? "button active" : "button"} 
                      type="button" 
                      value="게시"
                      onClick={this.addComment}
                      />
                  </form>
                </footer>
              </article>
            </div>
            <div className="main_right">
              <div className="right_info">
                <div className="aside_logo">
                  <div className="as_logo_left">
                    <img src="images/taejinlim/model.jpg" alt=""></img><span>Armand_official</span>
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
                      <img src="images/taejinlim/chanel2.jpg" alt=""></img><span>chanelofficial</span>
                    </div>
                    <div className="recommend_fw"><span>팔로우</span></div>
                  </div>
                  <div className="recommend">
                    <div className="recommend_info">
                      <img src="images/taejinlim/ader.jpg" alt=""></img><span>adererror_official</span>
                    </div>
                    <div className="recommend_fw"><span>팔로우</span></div>
                  </div>
                  <div className="recommend">
                    <div className="recommend_info">
                      <img src="images/taejinlim/cardiB2.jpg" alt=""></img><span>iamcardib</span>
                    </div>
                    <div className="recommend_fw"><span>팔로우</span></div>
                  </div>
                  <div className="recommend">
                    <div className="recommend_info">
                      <img src="images/taejinlim/tyga.jpg" alt=""></img><span>tyga</span>
                    </div>
                    <div className="recommend_fw"><span>팔로우</span></div>
                  </div>
                  <div className="recommend">
                    <div className="recommend_info">
                      <img src="images/taejinlim/balen.jpg" alt=""></img><span>balenciaga</span>
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
    </>  
)
    }
}

export default MainLim;