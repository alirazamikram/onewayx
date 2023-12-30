import React from "react";
import { Wrapper } from "./style";

const Button = ({ children,onClick,className }) => {
  const handleOnClick = (e)=> {
    return onClick && onClick(e)

  }
  return (
    <Wrapper>
      <button  onClick={handleOnClick} className={className}>{children}</button>
    </Wrapper>
  );
};
export default Button;
