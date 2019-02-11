import React from "react";
import PropTypes from "prop-types";
import "./DashboardLeft.css";
import Avatar from "../../common/Avatar/Avatar";
import avatar from "../../common/img/avatar.jpg";

export default class DashboardLeft extends React.Component {
  render() {
    return (
      <div className="dashboard_left">
        <div className="profile_card">
          <a className="profile_card_bguser" href="/serenahacking" />
          <div className="profile_card_content">
            <a href="/" className="card_content_img">
              <Avatar src={avatar} size={"medium"} />
            </a>
            <div className="username">
              <div className="username-cardname">Serena</div>
              <a href="/" className="username-dir">
                <span>@happyhacking</span>
              </a>
            </div>
            <div className="profile_card_stats">
              <ul className="stats_items">
                <li className="item">
                  <a href="/">
                    <span className="item-label">Tweets</span>
                    <span className="item-value">239</span>
                  </a>
                </li>
                <li className="item">
                  <a href="/">
                    <span className="item-label">Following</span>
                    <span className="item-value">753</span>
                  </a>
                </li>
                <li className="item">
                  <a href="/">
                    <span className="item-label">Followers</span>
                    <span className="item-value">57</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dashboard_trend_module">
          <div className="trend_header">Trends for you</div>
          <div className="trend_content">
            <ul>
              <li>
                <a href="/">
                  <span className="trend_topic">Jeffrey Epstein</span>
                  <div className="trend_detail">43.4K Tweets</div>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="trend_topic">Jeffrey Epstein</span>
                  <div className="trend_detail">43.4K Tweets</div>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="trend_topic">Jeffrey Epstein</span>
                  <div className="trend_detail">43.4K Tweets</div>
                </a>
              </li>
              <li>
                <a href="/">
                  <span className="trend_topic">Jeffrey Epstein</span>
                  <div className="trend_detail">43.4K Tweets</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
