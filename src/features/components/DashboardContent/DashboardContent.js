import React from "react";
import TweetBox from "../TweetBox/TweetBox";
import Header from "../../common/Header/Header";
import Context from "../../common/Context/Context";
import ListText from "../../common/ListText/ListText";
import ListMedia from "../../common/ListMedia/ListMedia";
import Tooltip from "../../common/Tooltip/Tooltip";
import { MessageCircle, Repeat, Heart, Mail, User } from "react-feather";
import "./DashboardContent.css";
import "../../../common/store";
import store from "../../../common/store";
import { updateTimeline } from "../../../common/action/timeline";
import { getPrevData } from "../../../model/timeline";

export default class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: store.getState().timeline.data
    };
  }

  componentDidMount() {
    getPrevData(0, 10).then(data => {
      store.dispatch(updateTimeline(data));
    });

    store.subscribe(() => {
      this.setState({ timeline: store.getState().timeline.data });
    });
  }

  render() {
    return (
      <div className="dashboard_content">
        <TweetBox />
        <div className="dashboard_content_main">
          <ol>
            {this.state.timeline.map((data, index) => {
              return (
                <li key={index}>
                  <div className="stream-tweet">
                    <Context username={data.anothername} actions={data.action}>
                      <Repeat size={13} />
                    </Context>
                    <div className="stream_tweet_content">
                      <div className="item-header">
                        <Header
                          src={data.avatar}
                          fullname={data.fullname}
                          username={data.username}
                          time={data.time}
                        />
                      </div>
                      <div className="item-container">
                        <ListText mainText={data.mainText} />
                        <ListMedia src={data.img} />
                      </div>
                      <div className="item-footer">
                        <div className="each-footer">
                          <Tooltip textTip={"Reply"} countNum={data.replyNum}>
                            <MessageCircle size={13} />
                          </Tooltip>
                        </div>
                        <div className="each-footer">
                          <Tooltip
                            textTip={"Retweet"}
                            countNum={data.retweetNum}
                          >
                            <Repeat size={13} />
                          </Tooltip>
                        </div>
                        <div className="each-footer">
                          <Tooltip textTip={"Like"} countNum={data.likeNum}>
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
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
