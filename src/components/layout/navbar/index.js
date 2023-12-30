import React, { useState } from "react";
import { NavBg, NavWrapper, Toogle } from "./style";
import {
  LogoBlackOrangeSvg,
  LogoWhiteOrangeSvg,
  NavButtonSvg,
} from "../../assets/svgs";
import { useLocation, useNavigate } from "react-router-dom";
import SocialIcons from "../social-icons";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <NavWrapper>
        {location.pathname === "/first" ? (
          <>
            <div className="left">
              <LogoWhiteOrangeSvg
                className="nav-logo"
                onClick={() => navigate("/")}
              />
              <NavButtonSvg
                className={show ? "nav-btn-hide" : "nav-btn-show"}
                onClick={() => setShow(true)}
              />
            </div>
            <SocialIcons />
          </>
        ) : location.pathname === "/explore-the-magic" ? (
          <>
            <NavButtonSvg
              className={show ? "hide-opacity" : "show-opacity"}
              onClick={() => setShow(true)}
            />
            <LogoWhiteOrangeSvg
              className="logo"
              onClick={() => navigate("/")}
            />
          </>
        ) : location.pathname === "/" ? (
          <>
            <NavButtonSvg
              className={show ? "hide-opacity" : "show-opacity"}
              onClick={() => setShow(true)}
            />
            <img
              src="/images/white-orange.png"
              className="logo"
              alt="img"
              onClick={() => navigate("/")}
            />
          </>
        ) : location.pathname === "/elevate-together" ? (
          <>
            <NavButtonSvg
              className={show ? "hide-opacity" : "show-opacity"}
              onClick={() => setShow(true)}
            />
            <LogoWhiteOrangeSvg
              className="logo"
              onClick={() => navigate("/")}
            />
          </>
        ) : location.pathname === "/join-investment" ? (
          <>
            <NavButtonSvg
              className={show ? "hide-opacity" : "show-opacity"}
              onClick={() => setShow(true)}
            />
            <LogoWhiteOrangeSvg
              className="logo"
              onClick={() => navigate("/")}
            />
          </>
        ) : location.pathname === "/privacy-policy" ? (
          <div className="nav-wrapper">
            <NavButtonSvg
              className={show ? "hide-opacity" : "show-opacity"}
              onClick={() => setShow(true)}
            />
            <LogoBlackOrangeSvg
              className="logo"
              onClick={() => navigate("/")}
            />
          </div>
        ) : location.pathname === "/terms-and-conditions" ? (
          <div className="nav-wrapper">
            <NavButtonSvg
              className={show ? "hide-opacity" : "show-opacity"}
              onClick={() => setShow(true)}
            />
            <LogoBlackOrangeSvg
              className="logo"
              onClick={() => navigate("/")}
            />
          </div>
        ) : (
          ""
        )}
      </NavWrapper>
      <Toogle>
        <div className={show ? "show-toogle" : "hide-toogle"}>
          <ul onClick={() => setShow(false)}>
          <a href="/"><li>home</li></a> 
            <a href="/">
              {" "}
              <li>our story</li>
            </a>
            <a href="/elevate-together">
              {" "}
              <li>elevate together</li>
            </a>
            <a href="">
              {" "}
             <a href="/enter-our-world"><li>enter our world</li></a> 
            </a>
            <a href="/explore-the-magic">
              <li>
                EXPLORE THE MAGIC{" "}
                <span
                  style={{ fontFamily: "var(--normal-font)", fontSize: "12px",textTransform:'capitalize'}}
                >
                  Beta{" "}
                </span>
              </li>
            </a>
            <a href="/connect-with-us">
              {" "}
              <li>connect with us</li>
            </a>
          </ul>
        </div>
      </Toogle>
      {show ? <NavBg onClick={() => setShow(false)} /> : ""}
    </>
  );
};
export default Navbar;
