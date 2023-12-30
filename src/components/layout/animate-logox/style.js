import styled from "styled-components";

export const Wrapper = styled.div`
  .logo {
    position: fixed;
    right: 50px;
    bottom: 50px;
    z-index:111;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 75px;
    height: 60px;
  }

  .logo-x {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .click-me-text {
    font-family: var(--normal-font);
    font-weight: bold;
    text-transform: uppercase;
    padding: 5px 0px;
    letter-spacing: 0.5px;
    font-size: 10px;
    color: #fff;
    animation: glow 2s infinite;
    width: 100px;
    text-align: center;
  }

  @keyframes glow {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media(max-width:768px){
    .logo-x{
      width:30px;
      height:30px;
    }
    .click-me-text{
      font-size:7px;
      padding:2px 0px;
    }
    .logo {
      position:fixed;
      right:10px;
      bottom:10px;
    }
  }
`;
