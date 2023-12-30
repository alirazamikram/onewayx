import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wrapper } from "./style";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import TypewriterComponent from "typewriter-effect";
import AnimateLogoX from "../layout/animate-logox";
import { NavBg } from "../layout/navbar/style";
import Home from "../home";


const OurStory = () => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("#ourstory", {
        x: 0,
        duration: 3,
        scrollTrigger: {
          trigger: "#ourstory",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#text", {
        x: 0,
        duration: 3,
        scrollTrigger: {
          trigger: "#text",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    } 
  }, []);
  const [expand, setExpand] = useState(false);
  return (
    <Wrapper>
    <Navbar />
      <Home />
      <div className="second-div">
        <div className="grid-img-div1">
          <img src="images/grid-shape1.png" alt="img" className="left-grid" />
          <img src="images/grid-shape1.png" alt="img" className="right-grid" />
        </div>
        <img
          src="/images/our-story-text.svg"
          className="out-story-text-img"
          alt="img"
          id="ourstory"
        />

        <div className="all-text-div" id="text">
          <h1 className="heading">Welcome to ONEWAYX, established in 2023.</h1>
          <p className="paragraph">
            We are leading the game-changing MetaCommerce channel to offer
            immersive, interactive experiences that transcend boundaries and
            redefine the concept of shopping.
          </p>
          <p className="paragraph">
            At the core of our mission, we are driven to revolutionise the
            shopping landscape into the new digital realm, with a blend of the
            in-store experience and the convenience of online shopping for
            brands and retailers to offer to their consumers.{" "}
          </p>

          <p className="paragraph">
            Embark on a new world, the ONE WAY to EXPERIENCE shopping.
          </p>
        </div>
        {/* <AnimateLogoX /> */}
      </div>

      <div className="four-div">
        <div className="four-div-heading">
          <TypewriterComponent
            options={{
              strings: ["Stay Ahead of the Game"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="banner-text">
         Lead the MetaCommerce landscape by joining our innovative Web3 Metaverse platform,<br /> Book a demo with our team.
        </p>
        <a href="https://calendly.com/asiara/demo" target="-blank">
          <button className="btn">Book a demo</button>
        </a>
      </div>
      <div className="third-div"></div>
      {expand ? <NavBg onClick={() => setExpand(false)} /> : ""}
      <Footer/>
    </Wrapper>
  );
};
export default OurStory;
