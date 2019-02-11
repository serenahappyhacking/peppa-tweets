import React from "react";
import TweetBox from "../TweetBox/TweetBox";
import Header from "../../common/Header/Header";
import Context from "../../common/Context/Context";
import ListText from "../../common/ListText/ListText";
import ListMedia from "../../common/ListMedia/ListMedia";
import Tooltip from "../../common/Tooltip/Tooltip";
import { MessageCircle, Repeat, Heart, Mail, User } from "react-feather";
import img1 from "../../common/img/img1.jpg";
import avatar from "../../common/img/avatar.jpg";
import "./Content.css";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "Addy Osmani",
      username: "@addyosmani",
      time: "19h",
      mainText:
        "Learn to debug CSS animations using @ChromeDevTools and the Animation",
      action: "Retweet",
      anothername: "Serena Wang"
    };
  }

  render() {
    return (
      <div className="dashboard_content">
        <TweetBox />
        <div className="dashboard_content_main">
          <ol>
            <li>
              <div className="stream-tweet">
                <Context
                  username={this.state.anothername}
                  actions={this.state.action}
                >
                  <Repeat size={13} />
                </Context>
                <div className="stream_tweet_content">
                  <div className="item-header">
                    <Header
                      src={avatar}
                      fullname={this.state.fullname}
                      username={this.state.username}
                      time={this.state.time}
                    />
                  </div>
                  <div className="item-container">
                    <ListText mainText={this.state.mainText} />
                    <ListMedia src={img1} />
                  </div>
                  <div className="item-footer">
                    <div className="each-footer">
                      <Tooltip textTip={"Reply"} countNum={7}>
                        <MessageCircle size={13} />
                      </Tooltip>
                    </div>
                    <div className="each-footer">
                      <Tooltip textTip={"Retweet"} countNum={235}>
                        <Repeat size={13} />
                      </Tooltip>
                    </div>
                    <div className="each-footer">
                      <Tooltip textTip={"Like"} countNum={876}>
                        <Heart size={13} />
                      </Tooltip>
                    </div>
                    <div className="each-footer">
                      <Tooltip textTip={"Direct Message"} countNum={""}>
                        <Mail size={13} />
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
