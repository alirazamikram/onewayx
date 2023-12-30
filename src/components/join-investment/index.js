import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Wrapper } from "./style";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import AnimateLogoX from "../layout/animate-logox";
import Cards, { HasnatCard, IsrarCard } from "../layout/avater-card";
import JoinOurJourney from "../layout/all-form/join-our-journey";
import Button from "../shared/button";
import Carousal from "react-elastic-carousel";
import AnnieCard, {
  FarhanCard,
  MansoorCard,
  PTCard,
  ZainCard,
} from "../layout/avater-card";

const JoinInvestment = () => {
  const [form, setForm] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      translateX: "100%",
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    video.play();
  }, []);

  const FormOut = () => {
    return setForm(false);
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];
  return (
    <Wrapper style={{ overflow: form ? "hidden" : "visible" }}>
      {/* <AnimateLogoX /> */}
      <Navbar />
      <div className="first-div">
      <video
        ref={videoRef}
        src="video/laser-video.mp4"
        muted
        loop
        autoPlay
        playsInline
        className="video1"
      />
      </div>
      <div className="second-div">
        <div className="grid-img-div1">
          <img src="images/grid-shape1.png" alt="img" className="left-grid1" />
          <img src="images/grid-shape1.png" alt="img" className="right-grid1" />
        </div>
        <div className="left1 slide-left" data-aos="slide-left">
          <h1 className="left-heading">SHAPING THE FUTURE OF METACOMMERCE</h1>
          <h3 className="left-heading2">
            Join Our Thrilling Investment Journey!
          </h3>
          <p className="snd-parah">
          Ready to dive into an electrifying opportunity that puts you ahead of the game in Web 3 and Commerce? Uncover a groundbreaking Metaverse and Blockchain company that is primed to shatter the norms of traditional online shopping
          </p>
          <p className="snd-parah">
           <span className="join-bullet-text">Join the movement:</span> 
            <br />
            <span className="less-then">&gt;</span> Embrace the metaverse and blockchain evolution <br />
            <span className="less-then">&gt;</span> Revolutionise the way future consumers shop<br />
            <span className="less-then">&gt;</span> Join a trailblazing team<br />
          </p>
          <p className="snd-parah">
          Join our exciting investment journey and become the driving power behind the evolution of retail. Get ready to embark on an exhilarating journey that promises limitless possibilities.
          </p>
        </div>
        <div className="right1 slide-right" data-aos="slide-right">
          <img
            src="images/join-investment-text.svg"
            alt="img"
            className="right-text-img"
          />
        </div>
      </div>
      <div className="third-div">
        <div className="video-div">
          <video
            ref={videoRef}
            src="video/avater-bgvideo.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="video"
          />
        </div>
        <div className="bg-blur"></div>
        <div className="video-parent-div">
          <h1 className="video-heading">THE TEAM</h1>
          <p className="video-paragraph">
            We are driven by the pursuit of innovation to deliver the shopping
            experience for the next generation.
          </p>
          <Carousal breakPoints={breakPoints}>
            <AnnieCard />
            <PTCard />
            <ZainCard />
            <MansoorCard />
            <FarhanCard />
            <HasnatCard />
          </Carousal>
        </div>
      </div>
      <div className="four-div">
        <div className="four-text-div">
          <h3 className="four-heading">NEW DIGITAL REALM</h3>
          <h3 className="four-heading2">YOU DON'T WANT TO MISS</h3>
        </div>
        <Button onClick={() => setForm(true)}>
          join the investment journey
        </Button>
      </div>
      {form ? <JoinOurJourney onClick={FormOut} ClickFunction={FormOut} /> : ""}
      <Footer />
    </Wrapper>
  );
};
export default JoinInvestment;
