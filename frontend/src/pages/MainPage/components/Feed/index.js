import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import News1 from "../../../../assets/news.png";
import Instagram from "../../../../assets/insta.png";
import Twitter from "../../../../assets/twitter.png";
import Builder from "../../../../assets/builder.png";
import GoG from "../../../../assets/gog.png";
import Twitch from "../../../../assets/twitch.png";

import "./styles.css";

const Feed = () => (
  <div className="feed">
    <div className="news" style={{ marginLeft: "8%" }}>
      <h1>NEWS</h1>

      <div className="new">
        <img src={News1} alt="" />
        <h2 id="title">Jogo BlaBla: 20% OFF!</h2>
        <h3 id="metadata">BlaBla | January 6, 2020</h3>
        <p id="description">Lorem ipsum dolor sit amet, con... </p>
        <div className="newFooter">
          <p id="more">Read More</p>
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>

      <div className="new">
        <img src={News1} alt="" />
        <h2 id="title">Jogo BlaBla: 20% OFF!</h2>
        <h3 id="metadata">BlaBla | January 6, 2020</h3>
        <p id="description">Lorem ipsum dolor sit amet, con... </p>
        <div className="newFooter">
          <p id="more">Read More</p>
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </div>

    <div className="jobs">
      <h1>JOBS</h1>

      <h2>We are not hiring yet!</h2>
      <img src={Builder} alt="" />
    </div>

    <div className="communitys">
      <h1>COMMUNITY</h1>

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
          <img src={GoG} alt="" />
          <img src={Twitch} alt="" />
        </div>

        <hr />

        <div className="twitter">
          <div className="centerContent">
            <div className="selfCenter standardWidth">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="NiStPhG"
                options={{
                  height: 100,
                  width: 210
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
