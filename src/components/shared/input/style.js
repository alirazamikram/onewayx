import styled from "styled-components";

export const Wrapper = styled.div`
  input {
    width: 360px;
    height: 40px;
    padding-left: 15px;
    border-radius: 24px;
    border: 1px solid white;
    background: transparent;
    outline: none;
    color: white;
    margin-bottom:10px;
    letter-spacing:0.5px;
    transition:0.5s;
    @media (max-width:768px){
      width:300px;
} 
  }
  input::placeholder {
    color:rgba(255,255,255,0.8)
  }
  input:focus {
    border:1px solid #ef3d24;
  }

`;
