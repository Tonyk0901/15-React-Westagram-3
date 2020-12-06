import React, { Component } from "react";
import Feed from "./Feed";

class Feeds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedData: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/images/janghyeonlee/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          feedData: res.feedsData,
        });
      });
  }

  handleCommentChange = (comments) => {
    // comments 정상적으로 받아지고 있음.
    // 여기서 받아온 comments로 이 컴포넌트의 state를 바꾸어 주어야 함.
  };

  render() {
    return (
      <>
        {this.state.feedData.map((data) => (
          <Feed
            key={data.key}
            feedImgSrc={data.imgUrl}
            comments={data.comments}
            onCommentsChange={this.handleCommentChange}
          />
        ))}
      </>
    );
  }
}

export default Feeds;
