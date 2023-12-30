import React from "react";
import { Wrapper } from "./style";
import CubeBox from "../layout/cube";

const Home = () => {
  return (
    <Wrapper>
    <div className="main">
      <div className="img-div">
        <div className="blur-div"></div>
      </div>
      <div className="luxury-text-div">
        <h1 className="luxury-text">SHAPING THE FUTURE OF METACOMMERCE </h1>
      </div>
      <div className="cube-div">
        <CubeBox />
        <img
          src="images/rotate-indicator.svg"
          alt="img"
          className="indicator"
        />
      </div>
      </div>
    </Wrapper>
  );
};
export default Home;
