import React from "react";
import TweetBox from "../TweetBox/TweetBox";
import Header from "../../common/Header/Header";
import Context from "../../common/Context/Context";
import ListText from "../../common/ListText/ListText";
import ListMedia from "../../common/ListMedia/ListMedia";
import Tooltip from "../../common/Tooltip/Tooltip";
import { MessageCircle, Repeat, Heart, Mail } from "react-feather";
import { updateTimeline } from "../../../common/action/timeline";
import { sendTweet } from "../../../common/action/timeline";
import { getPrevData } from "../../../model/timeline";
import { connect } from "react-redux";
import "./DashboardContent.css";

class DashboardContent extends React.Component {
  componentDidMount() {
    getPrevData(0, 10).then(data => {
      this.props.onTimelineUpdate(data);
    });
  }

  render() {
    if (!this.props.timeline.userId) {
      return "Tweets is loading...";
    }
    return (
      <div className="dashboard_content">
        <TweetBox
          src={this.props.timeline.avatar}
          userId={this.props.timeline.userId}
          onSendTweetData={this.props.onSendTweetData}
        />
        <div className="dashboard_content_main">
          <ol>
            {this.props.timeline.tweets.map((data, index) => {
              return (
                <li key={index}>
                  <div className="stream-tweet">
                    <Context username={data.anothername} action={data.action} />
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

const mapStateToProps = state => {
  return {
    timeline: state.timeline.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTimelineUpdate: data => {
      dispatch(updateTimeline(data));
    },
    onSendTweetData: tweet => {
      dispatch(sendTweet(tweet));
    }
  };
};

DashboardContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContent);

export default DashboardContent;
