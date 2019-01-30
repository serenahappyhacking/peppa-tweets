import React from "react";
import "./Header.css";
import Avatar from "../Avatar/Avatar";
import Dropdown from "../Dropdown/Dropdown";

export default class Header extends React.Component {
  render() {
    const { src, fullname, username, time } = this.props;
    return (
      <div className="header">
        <a href="/">
          <div className="avatar">
            <Avatar src={src} size={"small"} />
          </div>
          <span>{fullname}</span>
          <span className="username">{username}</span>
          <small className="time">{time} </small>
        </a>
        <Dropdown />
      </div>
    );
  }
}
