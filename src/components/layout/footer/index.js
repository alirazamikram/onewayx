import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import SocialIcons from "../social-icons";
import { useNavigate } from "react-router-dom";
import { ChatSvg } from "../../assets/svgs";
import MobileFooter from "./mobile-footer";
import ChatModal from "../chatModal";
import AnimateLogoX from "../animate-logox";
import ConnectWithUs from "../all-form/contact-with-us";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // const clickFunction = () => {
  //   return setShowModal(false);
  // };
  return (
    <>
      <AnimateLogoX />

      {isMobile ? (
        <MobileFooter  />
      ) : (
        <Wrapper>
          <div className="grid-img-div">
            <img src="images/grid-shape.png" alt="img" className="left-grid" />
            <img src="images/grid-shape.png" alt="img" className="right-grid" />
          </div>
          <div className="left">
            <div>
              <a href="/">
                <img
                  src="images/globe-animation.gif"
                  alt="globe"
                  className="globe-animation"
                  onClick={() => navigate("/")}
                />
              </a>
            </div>

            <p className="left-text">
              @2023 Shaping the Future of MetaCommerce <br />
              ONEWAYX is a registered trademark of Meta Experience Company Ltd.
              All Rights Reserved.
            </p>
          </div>
          <div className="right">
            <div className="social-icon-div">
              <SocialIcons />
            </div>
            <div className="main-text-div">
              <div className="text-div-one">
                <a href="/elevate-together">
                  <p className="footer-text">Elevate together</p>
                </a>
                <a href="/explore-the-magic">
                  <p className="footer-text">Explore the magic (beta)</p>
                </a>
                <a href="/join-investment">
                  <p className="footer-text">Join investment journey</p>
                </a>
                <a href="/connect-with-us">
                  <p className="footer-text">Connect with us</p>
                </a>
              </div>
              <div className="text-div-two">
                <p className="snd-txt">
                  Whitepaper{" "}
                  <span
                    style={{
                      fontFamily: "var(--normal-font)",
                      fontSize: "12px",
                    }}
                  >
                    <i>(Coming soon)</i>
                  </span>
                </p>
                <a href="/privacy-policy">
                  <p className="snd-txt">Privacy policy</p>
                </a>
                <a href="/terms-and-conditions">
                  <p className="snd-txt">Terms of use</p>
                </a>
              </div>
            </div>
            <ChatSvg className="chat-svg" onClick={()=> navigate('/connect-with-us')} />
          </div>
        </Wrapper>
      )}
    </>
  );
};
export default Footer;
