import React from 'react';
import Comment from "./Comment.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots as farCircle } from "@fortawesome/free-regular-svg-icons";
import { faCaretSquareUp as farCaretSquareUp } from "@fortawesome/free-regular-svg-icons";

import "./Feed.scss";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    }
  }

  updateComment = (event) => {
    const id = Number(event.target.name);
    const newFeeds = [...this.state.feeds];
    newFeeds[id].commentInputValue = event.target.value;
    this.setState({
      feeds: newFeeds
    });
  }

  handleClip = (event) => {
    const id = Number(event.target.id);
    const newFeeds = [...this.state.feeds];

    newFeeds[id].contents.feedClipped = newFeeds[id].contents.feedClipped ? false : true;
    this.setState({
      feeds: newFeeds
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const id = Number(event.target.name);
    const { comments, commentInputValue } = this.state.feeds[id];
    const newFeeds = [...this.state.feeds];
    newFeeds[id].comments = comments.concat({
      id: Date.now(),
      feedId: id,
      usrId: "sunghoon__kim",
      comment: commentInputValue,
      isLiked: false,
    });
    newFeeds[id].commentInputValue = "";
    this.setState({
      feeds: newFeeds
    });
  }

  handleDelete = (comment) => {
    const newFeeds = [...this.state.feeds];
    const feedId = comment.feedId;
    newFeeds[feedId].comments = newFeeds[feedId].comments.filter((element) => {
      return (element !== comment);
    });
    this.setState({
      feeds: newFeeds
    });
  }

  handleLike = (comment) => {
    const newFeeds = [...this.state.feeds];
    const feedId = comment.feedId;
    for (let element of newFeeds[feedId].comments) {
      if (element === comment) {
        element.isLiked = element.isLiked ? false : true;
      }
    }
    this.setState({
      feeds: newFeeds
    });
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/sunghoonkim/data.json', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          feeds: res.feeds,
        });
      });
  }

  render() {
    const { feeds } = this.state;
    if (this.state.feeds.length > 0) {
      return (
        feeds.map(({ id, commentInputValue, profilePhoto, profileName, contents, comments, likeList }, index) => {
          const feedContentLength = (contents.content.length >= 51);
          return (
            <div key={index} className="feedsKim" >
              <article>
                <header className="feed-header">
                  <div className="feed-header-column">
                    <a className="delete-hyper-link" href="/">
                      <img src={profilePhoto} alt="IU" />
                    </a>
                    <a className="delete-hyper-link" href="/">
                      <span className="feed-header-profilename strong-font">{profileName}</span>
                    </a>
                  </div>
                  <div className="feed-header-column add-cursor">
                    <FontAwesomeIcon className="faIcon" icon={fasCircle} />
                    <FontAwesomeIcon className="faIcon" icon={fasCircle} />
                    <FontAwesomeIcon className="faIcon" icon={fasCircle} />
                  </div>
                </header>
                <img className="feed-image" src={contents.contentImage} alt="IU" />
                <section className="feed-buttons">
                  <div className="feed-buttons-column">
                    <FontAwesomeIcon className="faIcon fasHeart" icon={fasHeart} />
                    <FontAwesomeIcon className="faIcon" icon={farCircle} />
                    <FontAwesomeIcon className="faIcon" icon={farCaretSquareUp} />
                  </div>
                  <div className="feed-buttons-column">
                    <img src="images/sunghoonkim/bookmarkBtn.svg" alt="bookmark" />
                  </div>
                </section>
                <section className="feed-likes">
                  <img src={likeList[0].userProfilePhoto} alt="IU" />
                  <span>
                    <strong>{likeList[0].userName}</strong>
                    <span>님이</span>
                    <strong> 매우</strong>
                    <span>좋아합니다.</span>
                  </span>
                </section>
                <section className="feed-contents">
                  <div className="feed-content">
                    <strong>{profileName}</strong>
                    <div className={"feed-content-text" + (contents.feedClipped ? " clipped" : " un-clipped")}>
                      {contents.content}
                      <span onClick={this.handleClip} id={id} className="light-font add-cursor">접기</span>
                    </div>
                    <div onClick={this.handleClip} id={id} className={feedContentLength ? "feed-content-more light-font add-cursor" : "feed-content-more hide"}>{contents.feedClipped ? "더 보기" : ""}</div>
                  </div>
                </section>
                <section className="feed-comments">
                  <div className="feed-comment">
                    {comments.map((comment, index) => {
                      return (<Comment key={index} comment={comment} handleLike={this.handleLike} handleDelete={this.handleDelete} />)
                    })}
                  </div>
                  <form className="feed-comment-input">
                    <input
                      name={id}
                      className="feed-comment-input-content"
                      onChange={this.updateComment}
                      placeholder="댓글 달기..."
                      value={commentInputValue}
                    />
                    <button
                      name={id}
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
          )
        })
      );
    } else {
      return <h1>로딩중 입니다!</h1>
    }

  }
}

export default Feed;  