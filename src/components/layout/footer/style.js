import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 380px;
  background: #212121;
  display: flex;
  position: relative;
  position:relative;
  z-index:-1;

  .grid-img-div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top:40px;
    overflow-x:hidden;
  }
  .left-grid {
    position: relative;
    right: 20px;
    width: 70px;
  }
  .right-grid {
    position: relative;
    left: 20px;
    width: 70px;
  }
  .left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding: 0px 20px 0px 80px;
    box-sizing: border-box;
    z-index:1;
  }
  .globe-animation {
    width: 35%;
    padding-left: 80px;
    cursor:pointer;
  }
  .left-text {
    font-family: var(--normal-font);
    font-size: 10px;
    color: white;
    padding-left:60px;
    letter-spacing: 0.5px;
    line-height: 20px;
  }
  .right {
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
    z-index:1;
  }
  .social-icon-div {
    position: absolute;
    top: 30px;
    right: 80px;
  }
  .main-text-div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 30px;
  }
  .footer-text {
    font-family: var(--normal-font);
    font-size: 16px;
    color: white;
    letter-spacing: 0.5px;
    line-height: 20px;
    cursor: pointer;
    padding-top: 8px;
    transition: 0.3s;
  }
  .footer-text:hover {
    color: #ef3d24;
    text-underline-offset: 3px;
  }
  .snd-txt {
    font-family: var(--normal-font);
    font-size: 16px;
    color: lightgray;
    letter-spacing: 0.5px;
    line-height: 20px;
    transition: 0.3s;
    padding-top: 8px;
    cursor: pointer;
  }
  .snd-txt:hover {
    color: #ef3d24;
    text-underline-offset: 3px;
  }
  .chat-svg {
    position: absolute;
    bottom: 50px;
    right: 120px;
    cursor: pointer;
  }
  a {
    text-decoration:none;
  }
`;
