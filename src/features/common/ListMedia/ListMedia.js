import React from "react";
import PropTypes from "prop-types";
import "./ListMedia.css";

export default class ListMedia extends React.Component {
  render() {
    const { src } = this.props;
    return (
      <div>
        <img src={src} className="main-img" alt="loading" />
      </div>
    );
  }
}
