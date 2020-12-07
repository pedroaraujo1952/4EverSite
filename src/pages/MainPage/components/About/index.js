import React from "react";
import { ProgressBar } from "react-bootstrap";
import CodeIcon from "@material-ui/icons/Code";
import SubjectIcon from "@material-ui/icons/Subject";
import BrushIcon from "@material-ui/icons/Brush";
import AddBoxIcon from "@material-ui/icons/AddBox";

import "./styles.css";

const About = () => (
  <div className="about">
    <h1>About us</h1>
    <p>
      We are 4Ever Bits, a brazilian software development team created by Pedro
      Henrique Araújo and José Carlos Leão. Our main purpose is to innovate by
      presenting new ideas, API's and giving the consumer more options.
      Everything just to help the industry to move forward and have the user's
      confidence, because, to us, no matter what, but you, as a user of our
      technology, are always in the first place.
      <br />
      4Ever.
      <div className="knowMore">
        <AddBoxIcon />
      </div>
    </p>

    <div className="percentage">
      <div className="types" id="red">
        <ProgressBar now={82} label={`${82}%`} variant="danger" />
        <div className="text">
          <CodeIcon />
          <p>Programming</p>
        </div>
      </div>

      <div className="types" id="yellow">
        <ProgressBar now={72} label={`${72}%`} variant="warning" />

        <div className="text">
          <SubjectIcon />
          <p>Scripting</p>
        </div>
      </div>

      <div className="types" id="blue">
        <ProgressBar now={60} label={`${60}%`} />

        <div className="text">
          <BrushIcon />
          <p>Designing</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
