import React from "react";
import PropTypes from "prop-types";
import "./Tooltip.css";

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconShowOnHover: false
    };
  }

  handleMouseOver = e => {
    this.setState({ iconShowOnHover: true });
  };

  handleMouseOut = () => {
    this.setState({ iconShowOnHover: false });
  };

  render() {
    const { textTip, countNum, children, onClick } = this.props;
    return (
      <div className="tooltip-container" onClick={onClick}>
        <span
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          {children}
        </span>
        {this.state.iconShowOnHover ? (
          <div className="tooltip_inner">
            <span>{textTip}</span>
          </div>
        ) : (
          ""
        )}
        <span className="count">{countNum}</span>
      </div>
    );
  }
}

Tooltip.propTypes = {
  iconShowOnHover: PropTypes.bool
};
