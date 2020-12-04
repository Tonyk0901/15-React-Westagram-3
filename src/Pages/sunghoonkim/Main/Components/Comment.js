import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import "./Comment.scss";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    }
  }

  componentDidMount() {
    const { comments } = this.props;
    this.setState({
      comments
    })
  }

  render() {
    const { comments } = this.state;
    return (
      <>
        {comments.map((element, index) => {
          return (
            <div key={index}>
              <section className="CommentKim">
                <div className="comment-column">
                  <strong>
                    {element.usrId}
                  </strong>
                  <span>
                    {element.comment}
                  </span>
                </div>
                <div className="comment-column">
                  <FontAwesomeIcon className="faIcon" icon={farHeart} />
                </div>
              </section>
            </div>
          )
        })
        }
      </>
    );
  }
}

export default Comment;