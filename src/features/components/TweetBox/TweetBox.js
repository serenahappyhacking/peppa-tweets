import React from "react";
import "./TweetBox.css";
import Button from "../../common/Button/Button";
import Avartar from "../../common/Avatar/Avatar";
import Tooltip from "../../common/Tooltip/Tooltip";
import avatar from "../../common/img/avatar.jpg";
import { Image, Coffee, Cloud, MapPin, Smile } from "react-feather";

class TweetBoxFocus extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
    this.uploadRef = React.createRef();
    this.uploadImageRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.isFocused && this.props.isFocused) {
      this.textareaRef.current.focus();
    }
  }

  handleClick = e => {
    if (this.uploadRef) {
      this.uploadRef.current.click();
    }
  };

  handleClickImage = e => {
    console.log("upload image now.");
    if (this.uploadImageRef) {
      this.uploadImageRef.current.click();
    }
  };

  render() {
    const {
      isFocused,
      value,
      onFocusChange,
      onBlurChange,
      onTextChange
    } = this.props;
    if (!isFocused && !value) {
      return (
        <div className="tweet_box_before">
          <input
            className="content_focus_before"
            type="text"
            placeholder="What's happening?"
            onFocus={onFocusChange}
          />
          <div className="upload_image">
            <Tooltip textTip={"Add photos or video"} onClick={this.handleClick}>
              <Image size={15} />
            </Tooltip>
          </div>
          <input
            className="upload"
            type="file"
            accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v"
            ref={this.uploadRef}
          />
        </div>
      );
    } else {
      return (
        <div className="tweet_box_after">
          <textarea
            className="content_focus_after"
            onBlur={onBlurChange}
            ref={this.textareaRef}
            onChange={onTextChange}
          />
          <div className="toolbox">
            <div className="items">
              <div>
                <Tooltip
                  textTip={"Add photos or video"}
                  onClick={this.handleClickImage}
                >
                  <Image size={20} />
                </Tooltip>
              </div>
              <input
                className="upload"
                type="file"
                accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v"
                ref={this.uploadImageRef}
              />
              <Tooltip textTip={"Add a GIF"}>
                <Coffee size={20} />
              </Tooltip>
              <Tooltip textTip={"Add poll"}>
                <Cloud size={20} />
              </Tooltip>
              <Tooltip textTip={"Location disabled"}>
                <MapPin size={20} />
              </Tooltip>
            </div>
            <div className="btns">
              <span className="add-tweet-btn">
                <button>+</button>
              </span>
              <Button text={"Tweet"} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      value: ""
    };
  }

  handleFocus = e => {
    console.log("focused");
    if (e.target) {
      this.setState({ isFocused: true });
    }
  };

  handleBlur = () => {
    console.log("blur");
    this.setState({ isFocused: false });
  };

  handleTextChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="tweet_box">
        <div className="avatar">
          <Avartar src={avatar} size={"extra-small"} />
        </div>
        <TweetBoxFocus
          isFocused={this.state.isFocused}
          value={this.state.value}
          onFocusChange={this.handleFocus}
          onBlurChange={this.handleBlur}
          onTextChange={this.handleTextChange}
        />
      </div>
    );
  }
}
