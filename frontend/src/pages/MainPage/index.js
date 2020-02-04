import React, { Component } from "react";
import { Button } from "react-bootstrap";

import Header from "../../components/Header/index";
import Feed from "./components/Feed/index";
import About from "./components/About/index";
import Projects from "./components/Projects/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
// import Alert from "./components/Alert/index";

import Logo from "../../assets/LogoPNG.png";

import "./styles.css";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.learnMore = React.createRef();
    this.projects = React.createRef();
  }

  handleLearnMore = event => {
    const { index, selected } = this.props;
    if (index === selected) {
      setTimeout(() => {
        this.learnMore.current.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  handleProjects = event => {
    const { index, selected } = this.props;
    if (index === selected) {
      this.projects.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <div className="body">
        {/* <Alert /> */}
        <Header />

        <div className="parallax">
          <div className="content">
            <div>
              <img src={Logo} alt="" />
              <h1>
                4Ever Bits Alpha <br />
                template site{" "}
              </h1>
              <p>Be For Us, Be 4Ever</p>
              <div className="buttons">
                <Button variant="danger" onClick={this.handleLearnMore}>
                  Learn More
                </Button>{" "}
                <Button
                  variant="outline-secondary"
                  onClick={this.handleProjects}
                >
                  Projects
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div ref={this.learnMore}>
          <About />
        </div>
        <div ref={this.projects}>
          <Projects />
        </div>
        <Feed />
        <Contact />
        <Footer />
      </div>
    );
  }
}
