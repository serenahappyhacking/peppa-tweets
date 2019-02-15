import React from "react";
import PropTypes from "prop-types";
import "./DashboardRight.css";
import Tooltip from "../../common/Tooltip/Tooltip";
import Avatar from "../../common/Avatar/Avatar";
import Button from "../../common/Button/Button";
import { Users } from "react-feather";
import cat from "../../common/img/cat.jpg";
import "./DashboardRight.css";

export default class DashboardRight extends React.Component {
  render() {
    return (
      <div className="dashboard-right">
        <header className="recommended_header">
          <h3>Who to follow</h3>
          <small>.</small>
          <span>Refresh</span>
          <small>View all</small>
        </header>
        <div className="recommended_modules">
          <div className="recommended_item">
            <a href="./">
              <Avatar src={cat} size={"small"} />
            </a>
            <div className="right">
              <span>
                <strong>Anna</strong>
                <span>x</span>
                <span className="UserNameBreak">&nbsp;</span>
                <span>
                  @<b>Myasdfadk</b>
                </span>
              </span>
              <Button text={"Follow"} />
            </div>
          </div>
          <div className="recommended_item">
            <a href="./">
              <Avatar src={cat} size={"small"} />
            </a>
            <div className="right">
              <span>
                <strong>Anna</strong>
                <span>x</span>
                <span className="UserNameBreak">&nbsp;</span>
                <span>
                  @<b>Myasdfadk</b>
                </span>
              </span>
              <Button text={"Follow"} />
            </div>
          </div>
          <div className="recommended_item">
            <a href="./">
              <Avatar src={cat} size={"small"} />
            </a>
            <div className="right">
              <span>
                <strong>Anna</strong>
                <span>x</span>
                <span className="UserNameBreak">&nbsp;</span>
                <span>
                  @<b>Myasdfadk</b>
                </span>
              </span>
              <Button text={"Follow"} />
            </div>
          </div>
        </div>
        <div className="recommended_footer">
          <Tooltip textTip={"find people you know"}>
            <Users size={20} />
          </Tooltip>
          <a href="/">Find people you know</a>
        </div>
      </div>
    );
  }
}

DashboardRight.propTypes = {};
