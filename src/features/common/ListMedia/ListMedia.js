import React from "react";
import "./ListMedia.css";

export default class ListMedia extends React.Component {
  render() {
    const { src } = this.props;
    return (
      <div className="listmedia">
        <img src={src} className="listmedia_img" alt="loading" />
      </div>
    );
  }
}
