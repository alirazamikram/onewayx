import React from "react";
import { Wrapper } from "./style";
import { useNavigate } from "react-router-dom";
import Button from '../shared/button'

const EnterOurWorld = () => {
    const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="img-div">
        <div className="blur-div"></div>
      </div>
      <div className="luxury-text-div">
        <h1 className="luxury-text" >Coming Soon </h1>
        <Button onClick={()=> navigate('/')}>Go Back</Button>
      </div>
    </Wrapper>
  );
};
export default EnterOurWorld;
