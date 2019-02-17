import React from "react";
import "./Avatar.css";

export default class Avatar extends React.Component {
  render() {
    const { src, size } = this.props;
    return <img className={`${size} avatar`} src={src} alt="loading" />;
  }
}
