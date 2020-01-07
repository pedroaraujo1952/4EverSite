import React from "react";

import "./styles.css";

import Logo from "../../assets/LogoPNG.png";

const Header = () => (
  <div className="main-header">
    <div className="logo">
      <img src={Logo} alt="" />
      <h1>
        4Ever Bits <sup>®</sup>
      </h1>
    </div>

    <div className="content">
      <h1 style={{ marginLeft: "0" }}>HOME</h1>
      <h1>NEWS</h1>
      <h1>GAMES</h1>
      <h1>SUPPORT</h1>
    </div>

    <h1 id="language">ENGLISH</h1>
  </div>
);

export default Header;
