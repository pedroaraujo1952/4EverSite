import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleExit = () => {
    window.location.reload("/");
  };

  handleDismiss = () => {
    this.setState({ width: 1000 });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.width < 800 ? true : false}>
          <Modal.Header closeButton>
            <Modal.Title>
              4Ever Bits <sup>©</sup>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>This site is not recomended for mobile users</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleExit}>
              Exit
            </Button>
            <Button variant="danger" onClick={this.handleDismiss}>
              Dismiss
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
