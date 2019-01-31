import React from "react";
import PropTypes from "prop-types";
import "./Topbar.css";
import { Twitter, Home, Activity, Bell, Mail, Search } from "react-feather";
import Avatar from "../../common/Avatar/Avatar";
import Button from "../../common/Button/Button";
import avatar from "../../common/img/avatar.jpg";

export default class Toolbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar-inner">
          <div className="navigation">
            <ul className="nav">
              <li className="home">
                <span>
                  <Home size={18} />
                </span>
                <a href="/">Home</a>
              </li>
              <li className="moments">
                <Activity size={18} />
                <a href="/moments">Moments</a>
              </li>
              <li className="notifications">
                <Bell size={18} />
                <a href="/notifications">Notifications</a>
              </li>
              <li className="messages">
                <Mail size={18} />
                <a href="/messages">Messages</a>
              </li>
            </ul>
          </div>
          <div className="twitter-icon">
            <Twitter color="#1da1f2" size="20" />
          </div>
          <div className="pull-right">
            <form action="/search-query" method="post" className="search-form">
              <input type="text" />
              <span>Search Twitter</span>
              <Search size={15} className="search-icon" />
            </form>
            <div className="avatar">
              <Avatar size={"extra-small"} src={avatar} />
            </div>
            <div>
              <Button text={"Tweet"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {};
