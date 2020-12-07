import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import News1 from "../../../../assets/controller.jpg";
import News2 from "../../../../assets/mobile.png";
import Instagram from "../../../../assets/insta.png";
import Twitter from "../../../../assets/twitter.png";
import Builder from "../../../../assets/builder.png";
import GoG from "../../../../assets/epic.jpg";
import Twitch from "../../../../assets/twitch.png";

import "./styles.css";

const Feed = () => (
  <div className="feed">
    <div className="news">
      <h1>News</h1>

      <div className="new">
        <img src={News1} alt="" />
        <h2 id="title">4Ever Bits: New game soon!</h2>
        <h3 id="metadata">4Ever | February 3, 2020</h3>
        <p id="description">Lorem ipsum dolor sit amet, con... </p>
        <div className="newFooter">
          <p id="more">Read More</p>
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>

      <div className="new">
        <img src={News2} alt="" />
        <h2 id="title">4Ever Bits: New app soon!</h2>
        <h3 id="metadata">4Ever | February 3, 2020</h3>
        <p id="description">Lorem ipsum dolor sit amet, con... </p>
        <div className="newFooter">
          <p id="more">Read More</p>
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </div>

    <div className="jobs">
      <h1>Jobs</h1>

      <h2>We are not hiring yet!</h2>
      <img src={Builder} alt="" />
    </div>

    <div className="communitys">
      <h1>Community</h1>

      <div className="community">
        <div className="social-medias">
          <img src={Twitter} alt="" />
          Follow Us on Twitter
        </div>
        <div className="social-medias">
          <img src={Instagram} alt="" />
          Follow Us on Instagram
        </div>

        <div className="comm-links">
          <img src={GoG} alt="" style={{ border: "2px solid #183494" }} />
          <img src={Twitch} alt="" />
        </div>

        <hr />

        <div className="twitter">
          <div className="centerContent">
            <div className="selfCenter standardWidth">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="phsarauj_"
                options={{
                  height: 260,
                  width: 240
                }}
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Feed;
