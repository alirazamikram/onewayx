import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 380px;
  background: #212121;
  display: flex;
  flex-direction: column;
  position:relative;

  .parent-div {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding: 0px 20px 0px 30px;
    box-sizing: border-box;
    z-index: 1;
  }
  .left-text {
    font-family: var(--normal-font);
    font-size: 10px;
    color: white;
    padding: 15px;
    letter-spacing: 0.5px;
    line-height: 20px;
    text-align: center;
  }
  .globe-animation-div {
    width: 100%;
    height: 45%;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  .globe-animation {
    width: 140px;

    cursor: pointer;
  }
  .right {
    padding: 20px 15px 0px 15px;
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    z-index: 1;
  }
  .main-text-div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-left: 0px 10px;
  }
  .footer-text {
    font-family: var(--normal-font);
    font-size: 9px;
    color: white;
    letter-spacing: 0.5px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  .footer-text:hover {
    color: #ef3d24;
    text-underline-offset: 3px;
  }
  .snd-txt {
    font-family: var(--normal-font);
    font-size: 9px;
    color: lightgray;
    letter-spacing: 0.5px;
    line-height: 20px;
    transition: 0.3s;
    cursor: pointer;
  }
  .snd-txt:hover {
    color: #ef3d24;
    text-underline-offset: 3px;
  }
  .social-icon-div {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-decoration:none;
  }
  .chat-svg {
    position: absolute;
    bottom: 10px;
    right: 75px;
    cursor: pointer;
    width: 40px;
  }
`;
