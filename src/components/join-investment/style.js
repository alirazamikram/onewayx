import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;

  .first-div {
    ${'' /* background-image: url("images/join-investment-img.jpg"); */}
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  @media (max-width: 768px) {
    .random-nu,
    .random-nu1,
    .random-nu2,
    .random-nu3 {
      font-size: 50px;
    }
  }
  .second-div {
    width: 100%;
    height: 700px;
    background: #202020;
    display: flex;
    position: relative;
    overflow-x:hidden;
  }
  .grid-img-div1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 80px;
    overflow-x: hidden;
  }
  .left-grid1 {
    position: relative;
    right: 75px;
    width: 120px;
  }
  .right-grid1 {
    position: relative;
    left: 65px;
    width: 120px;
  }
  .left1 {
    width: 50%;
    padding: 15px 10px 15px 90px;
    box-sizing: border-box;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .slide-left {
      opacity: 0;
      transform: translateX(-100%);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    .slide-left.aos-animate {
      opacity: 1;
      transform: translateX(0);
    }
 
  .left-heading {
    font-family: var(--silk-font);
    color: #fff;
    text-transform: uppercase;
    font-size: 22px;
    line-height: 36px;
  }
  .left-heading2 {
    font-family: var(--normal-font);
    font-weight: 500;
    color: #fff;
    font-size: 16px;
  }
  .snd-parah {
    font-family: var(--normal-font);
    padding-top: 20px;
    color: #fff;
    line-height: 24px;
  }
  .join-bullet-text {
    font-family: var(--normal-font);
    padding-top: 20px;
    color: #fff;
    line-height: 24px;
    font-weight:bold;
  }
  .less-then {
    color:#313a96;
  }
  .right1 {
    width: 50%;
    z-index: 1;
    padding: 15px 70px 15px 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .slide-right {
      opacity: 0;
      transform: translateX(100%);
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    .slide-right.aos-animate {
      opacity: 1;
      transform: translateX(0);
    }
  .right-text-img {
    width: 100%;
    height: 100%;
  }
  .third-div {
    position: relative;
    height: 700px;
    overflow: hidden;
    width: 100%;
  }
  .video-div {
    width: 100%;
    height: 100%;
  }
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(8px);
  }
  .video1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .rec {
    background: none;
  }
  .rec-arrow {
    color: white;
    background: #313a96;
  }
  .rec-arrow-right {
    margin-right: 50px;
    background: #313a96;
  }

  .rec-arrow-left {
    margin-left: 50px;
    background: #313a96;
  }

  .cSVxDz:hover:enabled,
  .cSVxDz:focus:enabled {
    background: #313a96;
  }
  .rec-dot_active {
    background: white;
  }
  .sc-dAOort {
    width: 35px;
    height: 35px;
    min-width: 35px;
    min-height: 35px;
    line-height: 35px;
    font-size: 20px;
  }
  .bg-blur {
    background: black;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }
  .video-parent-div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  .video-heading {
    color: white;
    text-transform: uppercase;
    font-size: 60px;
    padding: 80px 0px 30px 0px;
  }
  .video-paragraph {
    color: white;
    font-family: var(--inter-font);
    font-weight: bold;
    letter-spacing: 0.5px;
    width: 70%;
    text-align: center;
    line-height: 35px;
    padding-bottom: 30px;
  }
  .four-div {
    background-image: url("images/join-investment2.png");
    background-position: center;
    background-position-y: 0px;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  .four-text-div {
    width: 700px;
    height: 150px;
    background: rgba(49, 58, 150, 0.9);
    border-radius: 28px;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .four-heading {
    font-family: var(--normal-font);
    font-size: 42px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    color: transparent;
  }
  .four-heading2 {
    font-family: var(--normal-font);
    font-size: 42px;
    font-weight: 800;
    color: #fff;
    letter-spacing: 0.4px;
  }
  .join-invest-btn {
    width: 300px;
    height: 45px;
    background: rgba(0, 0, 0, 0.5);
    border: 4px solid red;
    outline: none;
    cursor: pointer;
    font-family: var(--inter-font);
    font-weight: bold;
    text-transform: uppercase;
    color: white;
    border-radius: 10px;
  }
  .card1 {
    width: 200px;
    height: 200px;
    background: darkgray;
  }
  @media (max-width: 768px) {
    .first-div {
      height: 350px;
    }
    .second-div {
      flex-direction: column;
      height: auto;
    }
    .left1 {
      width: 100%;
      padding: 30px;
      box-sizing: border-box;
    }
    .left-heading2 {
      font-size: 12px;
      text-align: center;
    }
    .left-heading {
      font-size: 10px;
      text-align: center;
    }
    .snd-parah {
      font-size: 10px;
      line-height: 14px;
      text-align: center;
    }
    .grid-img-div1 {
      display: none;
    }
    .right1 {
      width: 100%;
    }
    .right-text-img {
      position: relative;
      left: 10%;
    }
    .video-heading {
      font-size: 16px;
      padding: 80px 0px 15px 0px;
    }
    .video-paragraph {
      font-size: 12px;
      line-height:16px;
    }
    .rec-arrow-right {
      margin-right: 10px;
      background: #313a96;
    }
    .rec-arrow-left {
      margin-left: 10px;
      background: #313a96;
    }
    .bEeYDJ {
      font-size: 16px;
      width: 0px;
      height: 0px;
      min-width: 30px;
      line-height: 30px;
      background: #313a96;
    }
    .sc-dAOort {
      width: 25px;
    height: 25px;
    min-width: 25px;
    min-height: 25px;
    line-height: 16px;
    font-size: 16px;
    }
  
    .four-text-div {
      width: 320px;
      height: 80px;
      border-radius: 16px;
    }
    .four-heading {
      font-size: 20px;
      letter-spacing: 1.5px;
    }
    .four-heading2 {
      font-size: 18px;
    }
    .four-div {
      height: 350px;
    }
  }
`;
