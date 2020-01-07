import React from "react";

import "./styles.css";

import Logo from "../../assets/Logo 4Ever.png";

const Header = () => (
  <div className="main-header">
    <img src={Logo} alt="" />

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
