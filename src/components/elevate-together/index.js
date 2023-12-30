import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wrapper } from "./style";
import Navbar from "../layout/navbar";
import { LogoWhiteSvg } from "../assets/svgs";
import Footer from "../layout/footer";
import AnimateLogoX from "../layout/animate-logox";
import Button from "../shared/button";
import ConnectWithUs from "../layout/all-form/contact-with-us";
import UnleashForm from "../layout/all-form/unleash-your-potential";

const PartnerShipPage = () => {
  useEffect(() => {
    gsap.to("#elevate", {
      translateY: -300,
      duration: 5,
      scrollTrigger: {
        trigger: "#elevate",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
      },
    });
    gsap.to("#together", {
      translateY: -300,
      duration: 5,
      scrollTrigger: {
        trigger: "#together",
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
      },
    });
    if (window.innerWidth > 768) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("#card", {
        x: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#card",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#card2", {
        x: -100,
        duration: 2,
        scrollTrigger: {
          trigger: "#card2",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#card3", {
        x: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#card3",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#card4", {
        x: -100,
        duration: 2,
        scrollTrigger: {
          trigger: "#card4",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to("#card5", {
        x: 100,
        duration: 2,
        scrollTrigger: {
          trigger: "#card5",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    }
  }, []);

  const [form, setForm] = useState(false);
  const FormOut = () => {
    return setForm(false);
  };

  return (
    <Wrapper>
      {/* <AnimateLogoX /> */}
      <Navbar />
      <div className="first-div">
        <LogoWhiteSvg className="logo-white" />
        <h1 className="first-text">SHAPING THE FUTURE OF METACOMMERCE</h1>
      </div>
      <div className="snd-div">
        <div className="side-text">
          <img
            src="images/elevate-text.png"
            className="elevate-text"
            alt="img"
            id="elevate"
          />
          <img
            src="images/together-text.png"
            className="together-text"
            alt="img"
            id="together"
          />
        </div>
        <div className="grid-shape">
          <img src="images/grid-shape.png" alt="img" className="left-grid1" />
          <img src="images/grid-shape.png" alt="img" className="right-grid1" />
          <img src="images/grid-shape1.png" alt="img" className="left-grid2" />
          <img src="images/grid-shape1.png" alt="img" className="right-grid2" />
        </div>
        <div className="all-text">
          {/* <h1 className="snd-div-heading">
            welcome to onewayx the ultimate destination for the future of
            luxury.
          </h1> */}
          <p className="snd-div-heading">
            UNLEASH YOUR BRAND’S POTENTIAL IN THE WORLD OF THE METAVERSE
          </p>
          {/* <p className="snd-parah">
            Be at the forefront of the industry by connecting with consumers of
            tomorrow.
          </p> */}

          <div className="card-parent">
            <div className="card-one-div">
              <div className="card" id="card">
                <h3 className="card-heading">
                  Stay ahead of
                  <br /> the game
                </h3>
                <p className="card-parah">
                  Lead the MetaCommerce landscape by joining our innovative
                  platform. Stay ahead of the cutting edge trends.
                  <br />
                  <span className="card-span" onClick={() => setForm(true)}>
                    Learn More...
                  </span>
                </p>
              </div>
            </div>
            <div className="card-two-div">
              <div className="card2" id="card2">
                <h3 className="card-heading">Optimise your potential</h3>
                <p className="card-parah">
                  Gain deeper insights into your consumer's shopping behaviour,
                  and optimise strategies to boost sales and customer loyalty.
                  <br />
                  <span className="card-span2" onClick={() => setForm(true)}>
                    Learn More...
                  </span>
                </p>
              </div>
            </div>
            <div className="card-one-div">
              <div className="card" id="card3">
                <h3 className="card-heading">Unlock revenue opportunities</h3>
                <p className="card-parah">
                  Embrace Non-Fungible Tokens (NFTs) and Digital Wearables by
                  providing consumers with a digital twin. Enhance the value and
                  exclusivity while tapping into a new revenue opportunity of
                  digital sales.
                  <br />
                  <span className="card-span" onClick={() => setForm(true)}>
                    Learn More...
                  </span>
                </p>
              </div>
            </div>
            <div className="card-two-div" id="card4">
              <div className="card2">
                <h3 className="card-heading">
                  Sustainable competitive advantage
                </h3>
                <p className="card-parah">
                  Reduce waste and make an impact by providing a Phygital
                  product purchase experience. Test the market demand with the
                  digital twin to mitigate 920 billion tonnes of waste annually.
                  <br />
                  <span className="card-span2" onClick={() => setForm(true)}>
                    Learn More...
                  </span>
                </p>
              </div>
            </div>
            <div className="card-one-div" id="card5">
              <div className="card">
                <h3 className="card-heading">Personalise your offering</h3>
                <p className="card-parah">
                  Tailor your store and product experiences with a personalised
                  touch in the virtual realm.
                  <br />
                  <span className="card-span" onClick={() => setForm(true)}>
                    Learn More...
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="third-div">
        <div className="bg-blur">
          <Button onClick={() => setForm(true)}>let's elevate together</Button>
        </div>
      </div>
      {form ? <UnleashForm onClick={FormOut} ClickFunction={FormOut} /> : ""}
      <Footer />
    </Wrapper>
  );
};
export default PartnerShipPage;
