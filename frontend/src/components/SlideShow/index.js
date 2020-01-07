import React from "react";
import { Slide } from "react-slideshow-image";

import "./styles.css";

// const base_url = "../../assets/";

const slideImages = [
  "https://react-slideshow.herokuapp.com/images/slide_2.jpg",
  "https://react-slideshow.herokuapp.com/images/slide_3.jpg",
  "https://react-slideshow.herokuapp.com/images/slide_4.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const SlideShow = () => (
  <div className="slide-container">
    <Slide {...properties} >
      {slideImages.map((each, index) => (
        <img key={index} style={{ width: "100%",boxShadow: "0 3px 6px rgba(0, 0, 0, 0.5)" }} src={each} alt="" />
      ))}
    </Slide>
  </div>
);

export default SlideShow;
