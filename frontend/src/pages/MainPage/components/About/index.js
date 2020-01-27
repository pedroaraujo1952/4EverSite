import React from "react";
import { ProgressBar } from "react-bootstrap";

import "./styles.css";

const About = () => (
  <div className="about">
    <h1>About us</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu semper
      enim, a pellentesque libero. In egestas quam et lorem interdum, vel
      vehicula diam gravida. Morbi eget gravida nibh. Sed convallis pulvinar
      magna vitae luctus. Sed non congue quam. Ut bibendum mi a porta fringilla.
      Fusce sit amet porttitor odio, at malesuada massa. Morbi orci nisl,
      interdum id tortor id, varius tristique quam. Donec est ex, ultricies nec
      iaculis id, suscipit sed mi.
    </p>

    <div className="percentage">
      <div className="types" id="blue">
        <ProgressBar now={60} label={`${60}%`} />
        <p>Example</p>
      </div>
      <div className="types" id="red">
        <ProgressBar now={82} label={`${82}%`} variant="danger" />
        <p>Example</p>
      </div>
      <div className="types" id="yellow">
        <ProgressBar now={86} label={`${86}%`} variant="warning" />
        <p>Example</p>
      </div>
    </div>
  </div>
);

export default About;
