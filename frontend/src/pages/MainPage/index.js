import React, { Component } from "react";

import Header from "../../components/Header/index";
import Feed from "./Feed/index";

import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";

import "./styles.css";

export default class MainPage extends Component {
  render() {
    return (
      <div className="body">
        <Header />

        <div style={{ width: "100%", overflow: "hidden" }}>
          <div className="containerImgs">
            <img src={Img1} alt="" id="first" />
            <div>
              <img src={Img2} alt="" id="second" />
              <img src={Img3} alt="" id="third" />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className="arrow-down" />
            <div className="rectangle-rotated" />
          </div>
        </div>

        <Feed />
      </div>
    );
  }
}
