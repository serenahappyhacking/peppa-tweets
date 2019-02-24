import React from "react";
import "./Context.css";
import { Repeat, Heart, User } from "react-feather";

export default class Context extends React.Component {
  render() {
    const { username, action } = this.props;
    if (action && action === "retweet") {
      return (
        <div className="context">
          <Repeat size={13} />
          <span className="name">
            {username} {action}
          </span>
        </div>
      );
    } else if (action && action === "like") {
      return (
        <div className="context">
          <Heart size={13} />
          <span className="name">
            {username} {action}
          </span>
        </div>
      );
    } else if (action && action === "follow") {
      return (
        <div className="context">
          <User size={13} />
          <span className="name">
            {username} {action}
          </span>
        </div>
      );
    } else {
      return "";
    }
  }
}
