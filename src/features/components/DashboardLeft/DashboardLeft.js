import React from "react";
import "./DashboardLeft.css";
import Avatar from "../../common/Avatar/Avatar";
import store from "../../../common/store";
import { getProfileData } from "../../../model/profile";
import { updateProfileData } from "../../../common/action/profile";

class Trends extends React.Component {
  render() {
    const { trends } = this.props;
    if (trends) {
      return (
        <div className="dashboard_trend_module">
          <div className="trend_header">Trends for you</div>
          <div className="trend_content">
            <ul>
              {trends.map((trend, index) => (
                <li key={index}>
                  <a href="/">
                    <span className="trend_topic">{trend.topic}</span>
                    <div className="trend_detail">{trend.detail}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default class DashboardLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: store.getState().profile.data
    };
  }

  componentDidMount() {
    getProfileData(25).then(data => {
      store.dispatch(updateProfileData(data));
    });

    store.subscribe(() => {
      this.setState({ profile: store.getState().profile.data });
    });
  }

  render() {
    const profile = this.state.profile;
    return (
      <div className="dashboard_left">
        <div className="profile_card">
          <a
            className="profile_card_bguser"
            href="/serenahacking"
            style={{ backgroundImage: `url(${profile.bguser})` }}
          />
          <div className="profile_card_content">
            <a href="/" className="card_content_img">
              <Avatar src={profile.avatar} size={"medium"} />
            </a>
            <div className="username">
              <div className="username-cardname">{profile.cardname}</div>
              <a href="/" className="username-dir">
                <span>{profile.aliasname}</span>
              </a>
            </div>
            <div className="profile_card_stats">
              <ul className="stats_items">
                <li className="item">
                  <a href="/">
                    <span className="item-label">Tweets</span>
                    <span className="item-value">{profile.tweetsNum}</span>
                  </a>
                </li>
                <li className="item">
                  <a href="/">
                    <span className="item-label">Following</span>
                    <span className="item-value">{profile.followingNum}</span>
                  </a>
                </li>
                <li className="item">
                  <a href="/">
                    <span className="item-label">Followers</span>
                    <span className="item-value">{profile.followersNum}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Trends trends={profile.trends} />
      </div>
    );
  }
}
