import React from "react";
import { Wrapper } from "./style";

const Input = ({ type, placeholder }) => {
  return (
    <Wrapper>
      <input type={type} placeholder={placeholder} />
    </Wrapper>
  );
};
export default Input;
