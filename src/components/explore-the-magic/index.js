import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wrapper } from "./style";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import AnimateLogoX from "../layout/animate-logox";
import { useNavigate } from "react-router-dom";
import ConnectWithUs from "../layout/all-form/contact-with-us";

gsap.registerPlugin(ScrollTrigger);

const JoinTheFun = () => {
  const [form, setForm] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 768) {
      AOS.init({
        offset: 100,
      duration: 1000,
      translateX:'100%',
      });
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) {
      gsap.to("#text1", {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#text1",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#text2", {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#text2",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#text3", {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#text3",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#text4", {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#text4",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#text5", {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: "#text5",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#sndheading", {
        translateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#sndheading",
          start: "top 100%",
          end: "bottom 40%",
          scrub: true,
        },
      });
      gsap.to("#sndparah", {
        translateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#sndparah",
          start: "top 100%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }
  }, []);

  const FormOut = () => {
    return setForm(false);
  };

  return (
    <>
      <Wrapper style={{ overflow: form ? "hidden" : "visible" }}>
        <Navbar />
        <div className="first-img"></div>
        <div className="snd-div">
          <h1 className="snd-heading" id="sndheading">
            Are you an innovative
            <br />
            and forward thinking <br />
            brand?
          </h1>
          <p className="snd-parah" id="sndparah">
            Seamlessly incorporate a 3D, immersive, and interactive in-person
            shopping <br /> experience onto your existing website.
          </p>
        </div>
        <div className="third-div">
          <div className="grid-shape">
            <img src="images/grid-shape.png" alt="img" className="left-grid1" />
            <img
              src="images/grid-shape.png"
              alt="img"
              className="right-grid1"
            />
          </div>
          <div className="third-data">
            <div className="third-left">
              <h3 className="left-text1">
                How it works in
                <br /> 5 magic steps
              </h3>
            </div>
            <div className="third-right">
              <div className="circle-div">
                <img
                  src="images/pink-line.png"
                  alt="line"
                  className="line-img"
                />
                <span className="circle">01</span>
                <h3 className="circle-text slide-right" id="text1" data-aos="slide-left">
                  Choose a shop <br />
                  template
                </h3>
              </div>

              <div className="circle-div">
                <img
                  src="images/pink-line.png"
                  alt="line"
                  className="line-img"
                />
                <span className="circle">02</span>
                <h3 className="circle-text slide-right" id="text2" data-aos="slide-left">
                  Change the interior to suit
                  <br /> your brand's DNA
                </h3>
              </div>

              <div className="circle-div">
                <img
                  src="images/pink-line.png"
                  alt="line"
                  className="line-img"
                />
                <span className="circle">03</span>
                <h3 className="circle-text slide-right" id="text3" data-aos="slide-left">
                  Add your products
                </h3>
              </div>

              <div className="circle-div">
                <img
                  src="images/pink-line.png"
                  alt="line"
                  className="line-img"
                />
                <span className="circle">04</span>
                <h3 className="circle-text slide-right" id="text4" data-aos="slide-left">
                  Integrate into your <br /> existing eCommerce website
                </h3>
              </div>

              <div className="circle-div">
                <img
                  src="images/pink-line.png"
                  alt="line"
                  className="line-img"
                />
                <span className="circle">05</span>
                <h3 className="circle-text slide-right" id="text5" data-aos="slide-left">
                  Go Live!
                </h3>
              </div>

              <img
                src="images/line-vertically1.png"
                alt="line"
                className="line-vertically"
              />
              <img
                src="images/line-vertically.png"
                alt="line"
                className="line-vertically1"
              />
            </div>
          </div>
        </div>
        <div className="second-div">
          <div className="video-div">
            <video ref={videoRef} muted loop autoPlay className="snd-video">
              <source src="video/join-fun-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="snd-div-data">
            <button className="rect-btn" onClick={() => setForm(true)}>
              explore the magic
            </button>
            {/* <AnimateLogoX /> */}
          </div>
        </div>

        {form ? (
          <ConnectWithUs onClick={FormOut} ClickFunction={FormOut} />
        ) : (
          ""
        )}
        <Footer />
      </Wrapper>
    </>
  );
};
export default JoinTheFun;
