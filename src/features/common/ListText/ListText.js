import React from "react";
import "./ListText.css";

export default class ListText extends React.Component {
  render() {
    const { mainText } = this.props;
    return <p>{mainText}</p>;
  }
}
