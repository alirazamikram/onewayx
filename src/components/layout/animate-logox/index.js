import { React } from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";

const AnimateLogoX = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="logo" onClick={()=> navigate('/enter-our-world')}>
        <img src="images/logo-x-orange.svg" alt="logoX" className="logo-x" />
        <p className="click-me-text">Click Me</p>
      </div>
    </Wrapper>
  );
};
export default AnimateLogoX;
