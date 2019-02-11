import React from "react";
import "./TweetBox.css";
import Button from "../../common/Button/Button";
import Avartar from "../../common/Avatar/Avatar";
import avatar from "../../common/img/avatar.jpg";
import { Image, Coffee, Cloud, MapPin } from "react-feather";

export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="tweet-box">
        <div className="avatar">
          <Avartar src={avatar} size={"extra-small"} />
        </div>
        <form className="tweet-form">
          <div className="content">
            <input
              className="content_focus_before"
              placeholder="What's happening ?"
              type="file"
              accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v"
            />
            <input className="content_focus_after" />
          </div>
          <div className="toolbox">
            <div className="items">
              <span>
                <Image size={20} />
              </span>
              <span>
                <Coffee size={20} />
              </span>
              <span>
                <Cloud size={20} />
              </span>
              <span>
                <MapPin size={20} />
              </span>
            </div>
            <div className="btns">
              <span className="add-tweet-btn">
                <button>+</button>
              </span>
              <Button text={"Tweet"} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
