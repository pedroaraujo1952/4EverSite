import React, { Component } from "react";

import Header from "../../components/Header/index";
import Feed from "./components/Feed/index";
import SlideShow from "../../components/SlideShow/index";

import "./styles.css";

export default class MainPage extends Component {
  render() {
    return (
      <div className="body">
        <Header />

        <div className="slide">
          <SlideShow />
          <div className="bottom">
            <div className="Rectangle-13" />
            <div className="Rectangle-12" />
            <div className="Rectangle-15" />
            <div className="Rectangle-14" />
          </div>
        </div>

        <Feed />
      </div>
    );
  }
}
