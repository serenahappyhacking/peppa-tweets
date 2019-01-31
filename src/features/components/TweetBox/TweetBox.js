import React from "react";
import "./TweetBox.css";
import Button from "../../common/Button/Button";
import Avartar from "../../common/Avatar/Avatar";
import { Image, Coffee, Cloud, MapPin } from "react-feather";

export default class TweetBox extends React.Component {
  render() {
    return (
      <div className="tweet-box">
        <div className="avatar">
          <Avartar size={"extra-small"} />
        </div>
        <form className="tweet-form">
          <div className="content">xx</div>
          <div className="toolbox">
            <div className="items">
              <span className="toolbox-item">
                <Image size={13} />
              </span>
              <span className="toolbox-item">
                <Coffee size={13} />
              </span>
              <span className="toolbox-item">
                <Cloud size={13} />
              </span>
              <span className="toolbox-item">
                <MapPin size={13} />
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
