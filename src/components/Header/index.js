import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import React from "react";

import "./styles.css";

import Logo from "../../assets/LogoPNG.png";

const Header = () => (
  // <div className="main-header">
  //   <div className="logo">
  //     <img src={Logo} alt="" />
  //     <h1>
  //       4Ever Bits <sup>®</sup>
  //     </h1>
  //   </div>

  //   <div className="content">
  //     <h1 style={{ marginLeft: "0" }}>HOME</h1>
  //     <h1>NEWS</h1>
  //     <h1>GAMES</h1>
  //     <h1>SUPPORT</h1>
  //   </div>

  //   <h1 id="language">ENGLISH</h1>
  // </div>

  // <div className="main-header">
  <Navbar
    collapseOnSelect
    expand="lg"
    bg="link"
    variant="dark"
    fixed="top"
    height="60"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.63)" }}
  >
    <Navbar.Brand href="#home">
      <img
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />{" "}
      4Ever Bits <sup>®</sup>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">News</Nav.Link>
        <Nav.Link href="#pricing">Games</Nav.Link>
        <Nav.Link href="#pricing">Support</Nav.Link>
        <NavDropdown
          title="Language"
          id="collasible-nav-dropdown"
          bg="dark"
          variant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Portuguese</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  // </div>
);

export default Header;
