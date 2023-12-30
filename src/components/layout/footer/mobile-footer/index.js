import React, { useState } from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import SocialIcons from "../../social-icons";
import { ChatSvg } from "../../../assets/svgs";
import ChatModal from "../../chatModal";

const MobileFooter = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const clickFunction = () => {
    return setShowModal(false);
  }
  return (
    <Wrapper>
      <div className="parent-div">
        <div className="left">
          {/* <div className="globe-animation-div"> </div> */}
          <a href="/">
            <img
              src="images/globe-animation.gif"
              alt="globe"
              className="globe-animation"
            />
          </a>
        </div>
        <div className="right">
          <div className="main-text-div">
            <div className="text-div-one">
              <a href="/elevate-together" className="anchor">
                <p className="footer-text">Elevate together</p>
              </a>
              <a href="/explore-the-magic" className="anchor">
                <p className="footer-text">Explore the magic (beta)</p>
              </a>
              <a href="/join-investment" className="anchor">
                <p className="footer-text">Join investment journey</p>
              </a>
              <a href="/connect-with-us" className="anchor">
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
              <a href="/privacy-policy" className="anchor">
                <p className="snd-txt">Privacy policy</p>
              </a>
              <a href="/terms-and-conditions" className="anchor">
                <p className="snd-txt">Terms of use</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="social-icon-div">
        <SocialIcons />
      </div>
      <p className="left-text">
        @2023 Shaping the Future of MetaCommerce <br />
        ONEWAYX is a registered trademark of Meta Experience Company Ltd.
        <br />
        All Rights Reserved.
      </p>
      <ChatSvg className="chat-svg" onClick={() => setShowModal(true)} />
      {showModal && <ChatModal clickFunction={clickFunction} />}
    </Wrapper>
  );
};
export default MobileFooter;
