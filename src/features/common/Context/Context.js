import React from "react";
import "./Context.css";

export default class Context extends React.Component {
  render() {
    const { children, username, actions } = this.props;
    return (
      <div className="context">
        {children}
        <span className="name">
          {username} {actions}
        </span>
      </div>
    );
  }
}
