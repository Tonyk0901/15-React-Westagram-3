import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart, faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots as farCircle, faCaretSquareUp as farCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
import Comment from "./Comment.js";
import "./Feed.scss";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    }
  }

  updateComment = (event) => {
    const targetCommentId = Number(event.target.name);
    const newFeeds = [...this.state.feeds];
    newFeeds[targetCommentId].commentInputValue = event.target.value;
    this.setState({
      feeds: newFeeds
    });
  }

  handleClip = (event) => {
    const targetFeedId = Number(event.target.id);
    const newFeeds = [...this.state.feeds];
    newFeeds[targetFeedId].contents.feedClipped = newFeeds[targetFeedId].contents.feedClipped ? false : true;
    this.setState({
      feeds: newFeeds
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const targetFeedId = Number(event.target.name);
    const { comments, commentInputValue } = this.state.feeds[targetFeedId];
    const uniqueId = comments[comments.length - 1].id + 1;
    const newFeeds = [...this.state.feeds];
    newFeeds[targetFeedId].comments = comments.concat({
      id: uniqueId,
      feedId: targetFeedId,
      usrId: "sunghoon__kim",
      comment: commentInputValue,
      isLiked: false,
    });
    newFeeds[targetFeedId].commentInputValue = "";
    this.setState({
      feeds: newFeeds
    });
  }

  handleDelete = (targetComment) => {
    const newFeeds = [...this.state.feeds];
    const targetFeedId = targetComment.feedId;
    newFeeds[targetFeedId].comments = newFeeds[targetFeedId].comments.filter((comment) => {
      return (comment !== targetComment);
    });
    this.setState({
      feeds: newFeeds
    });
  }

  handleLike = (targetComment) => {
    const newFeeds = [...this.state.feeds];
    const targetFeedId = targetComment.feedId;
    for (let comment of newFeeds[targetFeedId].comments) {
      if (comment === targetComment) {
        comment.isLiked = comment.isLiked ? false : true;
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
      .then(response => response.json())
      .then(result => {
        this.setState({
          feeds: result.feeds,
        });
      });
  }

  render() {
    const { feeds } = this.state;
    if (feeds.length > 0) {
      return (
        <div className="FeedKim">
          {feeds.map(({ id, commentInputValue, profilePhoto, profileName, contents, comments, likeList }, index) => {
            const isFeedContentLong = (contents.content.length >= 51);
            return (
              <div key={index} className="wrapper" >
                <article>
                  <header className="feed-header">
                    <div className="column">
                      <Link className="delete-hyper-link" to="/MainKim">
                        <img src={profilePhoto} alt="IU" />
                      </Link>
                      <Link className="delete-hyper-link" to="/MainKim">
                        <span className="strong-font">{profileName}</span>
                      </Link>
                    </div>
                    <div className="column add-cursor">
                      <FontAwesomeIcon className="faIcon" icon={fasCircle} />
                      <FontAwesomeIcon className="faIcon" icon={fasCircle} />
                      <FontAwesomeIcon className="faIcon" icon={fasCircle} />
                    </div>
                  </header>
                  <img className="feed-image" src={contents.contentImage} alt="IU" />
                  <section className="feed-buttons">
                    <div className="column">
                      <FontAwesomeIcon className="faIcon fasHeart" icon={fasHeart} />
                      <FontAwesomeIcon className="faIcon" icon={farCircle} />
                      <FontAwesomeIcon className="faIcon" icon={farCaretSquareUp} />
                    </div>
                    <div className="column">
                      <img src="images/sunghoonkim/bookmarkBtn.svg" alt="bookmark" />
                    </div>
                  </section>
                  <section className="feed-likes">
                    <img src={likeList[0].userProfilePhoto} alt="IU" />
                    <span>
                      <strong>{likeList[0].userName}</strong>
                      <span>님이</span>
                      <strong>{" 매우 "}</strong>
                      <span>좋아합니다.</span>
                    </span>
                  </section>
                  <section className="feed-contents">
                    <div className="content">
                      <strong>{profileName}</strong>
                      <div className={"text" + (contents.feedClipped ? " clipped" : " un-clipped")}>
                        {contents.content}
                        {(isFeedContentLong) ? <span onClick={this.handleClip} id={id} className="light-font add-cursor">접기</span> : ""}
                      </div>
                      {(isFeedContentLong && contents.feedClipped) ? <div onClick={this.handleClip} id={id} className={"light-font add-cursor"}>더 보기</div> : ""}
                    </div>
                  </section>
                  <section className="feed-comments">
                    <div className="comment">
                      {comments.map(comment => {
                        return (<Comment key={comment.id} comment={comment} handleLike={this.handleLike} handleDelete={this.handleDelete} />)
                      })}
                    </div>
                    <form>
                      <input
                        name={id}
                        onChange={this.updateComment}
                        placeholder="댓글 달기..."
                        value={commentInputValue}
                      />
                      <button
                        name={id}
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
          })}
        </div>
      );
    } else {
      return <h1>로딩중</h1>
    }
  }
}

export default Feed;  