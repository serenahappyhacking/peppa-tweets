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
    const { textTip, countNum, children } = this.props;
    return (
      <button>
        <div className="icon-container">
          <span
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            {children}
          </span>
          {this.state.iconShowOnHover ? (
            <span className="text-tip">{textTip}</span>
          ) : (
            ""
          )}
        </div>
        <span className="count">{countNum}</span>
      </button>
    );
  }
}

Tooltip.propTypes = {
  iconShowOnHover: PropTypes.bool
};
