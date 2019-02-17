import React from "react";
import "./Button.css";

export default class TweetBox extends React.Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <button className="tweet-button" onClick={onClick}>
        {text}
      </button>
    );
  }
}
