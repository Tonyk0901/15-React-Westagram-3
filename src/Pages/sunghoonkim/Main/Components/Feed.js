import React from 'react';
import Comment from "./Comment.js";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass as farCompass } from "@fortawesome/free-regular-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircle as fasCircle } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots as farCircle } from "@fortawesome/free-regular-svg-icons";
import { faCaretSquareUp as farCaretSquareUp } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faSearch as fasSearch } from "@fortawesome/free-solid-svg-icons";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    const { comments, commentInputValue } = this.state;
    comments.push({
      id: Date.now(),
      usrId: "sunghoon__kim",
      comment: commentInputValue,
      isLiked: false,
    });
    this.setState({
      comments,
      commentInputValue: "",
    });
  }

  updateComment = (event) => {
    this.setState({
      commentInputValue: event.target.value,
    });
  }

  handleDelete = (number) => {
    number = Number(number);
    const stateCopy = [...this.state.comments];
    const newCopy = stateCopy.filter((element) => {
      return (element.id !== number);
    });

    this.setState({
      comments: newCopy,
    });
  }

  handleLike = (number) => {
    number = Number(number);
    const stateCopy = [...this.state.comments];
    for (let element of stateCopy) {
      if (element.id === number) {
        element.isLiked = element.isLiked ? false : true;
      }
    }
    this.setState({
      comments: stateCopy,
    });
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/sunghoonkim/commentData.json', {
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
    return (
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
              <img src="images/sunghoonkim/bookmarkBtn.svg" alt="bookmark" />
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
            <div className="feed-content">
              <strong>dlwlrma</strong>
              <p className={feedClipped ? "un-clipped" : "clipped"}>
                asdasdasdasdasdfsdfsdfsdfasdfasdfasdfasdfasdfsadfsdsdfsdfsdfsdfsdfs
                    <Link to="/MainKim" className="delete-hyper-link">
                  <span className="hashTag">#Lovepoem</span>
                </Link>
              </p>
              <span className="light-font add-cursor">&nbsp;더 보기</span>
            </div>
          </section>
          <section className="feed-comments">
            <div className="feed-comment">
              {comments.map((element, index) => {
                return (<Comment key={index} isLiked={element.isLiked} id={element.id} userId={element.usrId} comment={element.comment} handleLike={this.handleLike} handleDelete={this.handleDelete} />)
              })}
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
    );
  }
}

export default Feed;