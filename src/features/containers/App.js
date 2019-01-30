import React, { Component } from "react";
import Topbar from "../components/Topbar/Topbar";
import Content from "../components/Content/Content";
import DashboardLeft from "../components/DashboardLeft/DashboardLeft";
import DashboardRight from "../components/DashboardRight/DashboardRight";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Topbar className="topbar" />
        <main className="dashboard">
          <DashboardLeft className="left" />
          <Content className="content" />
          <DashboardRight className="right" />
        </main>
      </div>
    );
  }
}
