import React from "react";
import "./TweetBox.css";
import Button from "../../common/Button/Button";
import Avatar from "../../common/Avatar/Avatar";
import Tooltip from "../../common/Tooltip/Tooltip";
import { Image, Coffee, Cloud, MapPin } from "react-feather";
import { sendTweetData } from "../../../model/timeline";

function ImageUploaded({ index, selected, file, handleRemoveImg, urlArr }) {
  if (index === selected) {
    urlArr.splice(index, 1);
  }

  return (
    <div className="selected_imgfile">
      <img src={file} alt="...loading" />
      <span onClick={() => handleRemoveImg(index)}>x</span>
    </div>
  );
}

class TweetBoxFocus extends React.Component {
  constructor(props) {
    super(props);
    this.textareaRef = React.createRef();
    this.uploadRef = React.createRef();
    this.uploadImageRef = React.createRef();

    this.state = {
      urlArr: [],
      selected: ""
    };
  }

  componentDidUpdate(prevProps) {
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
    if (this.uploadImageRef) {
      this.uploadImageRef.current.click();
    }
  };

  handleChange = e => {
    const filesArr = Array.from(this.uploadRef.current.files);
    this.setState({
      urlArr: [
        ...this.state.urlArr,
        ...filesArr.map(file => URL.createObjectURL(file))
      ]
    });
  };

  handleChangeImageFileUpload = e => {
    const filesArr = Array.from(this.uploadImageRef.current.files);
    this.setState({
      urlArr: [
        ...this.state.urlArr,
        ...filesArr.map(file => URL.createObjectURL(file))
      ]
    });
  };

  handleRemoveImg = index => {
    this.setState({
      selected: index
    });
  };

  _onBlur = e => {
    if (e.relatedTarget != null && e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    this.props.onBlurChange();
  };

  render() {
    const {
      isFocused,
      value,
      onFocusChange,
      onTextChange,
      onSendTweet,
      onKeyDown
    } = this.props;

    const { urlArr, selected } = this.state;
    if (!isFocused && !value && this.state.urlArr.length === 0) {
      return (
        <div className="tweet_box_before">
          <input
            className="content_focus_before"
            type="text"
            placeholder="What's happening?"
            onFocus={onFocusChange}
          />
          <div>
            <div className="upload_image">
              <Tooltip
                textTip={"Add photos or video"}
                onClick={this.handleClick}
              >
                <Image size={15} />
              </Tooltip>
            </div>
            <input
              className="upload"
              type="file"
              accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v"
              ref={this.uploadRef}
              onChange={this.handleChange}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="tweet_box_after" onBlur={this._onBlur}>
          <div>
            <textarea
              className="content_focus_after"
              ref={this.textareaRef}
              onChange={onTextChange}
              onKeyDown={onKeyDown}
              value={value}
            />
          </div>
          {urlArr.length === 0
            ? null
            : urlArr.map((file, index) => (
                <ImageUploaded
                  key={index}
                  index={index}
                  selected={selected}
                  file={file}
                  handleRemoveImg={this.handleRemoveImg}
                  urlArr={urlArr}
                />
              ))}
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
                onChange={this.handleChangeImageFileUpload}
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
              <Button text={"Tweet"} onClick={onSendTweet} />
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
    if (e.target) {
      this.setState({ isFocused: true });
    }
  };

  handleBlur = e => {
    this.setState({ isFocused: false });
  };

  handleTextChange = e => {
    this.setState({ value: e.target.value });
  };

  sendTweet = () => {
    const newTweet = {
      textValue: this.state.value,
      userId: this.props.userId
    };
    sendTweetData(newTweet).then(tweet => {
      this.props.onSendTweetData(tweet);
    });
    this.setState({ value: "", isFocused: false });
  };

  onKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.sendTweet();
    }
  };

  render() {
    return (
      <div className="tweet_box">
        <div className="avatar">
          <Avatar src={this.props.src} size={"extra-small"} />
        </div>
        <TweetBoxFocus
          isFocused={this.state.isFocused}
          value={this.state.value}
          onFocusChange={this.handleFocus}
          onBlurChange={this.handleBlur}
          onTextChange={this.handleTextChange}
          onSendTweet={this.sendTweet}
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}
