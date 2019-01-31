import React from "react";
import "./Button.css";

export default class TweetBox extends React.Component {
  render() {
    const { text } = this.props;
    return <button className="tweet-button">{text}</button>;
  }
}
