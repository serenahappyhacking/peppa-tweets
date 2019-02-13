import React, { Component } from "react";
import Topbar from "../components/Topbar/Topbar";
import DashboardContent from "../components/DashboardContent/DashboardContent";
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
          <DashboardContent className="content" />
          <DashboardRight className="right" />
        </main>
      </div>
    );
  }
}
