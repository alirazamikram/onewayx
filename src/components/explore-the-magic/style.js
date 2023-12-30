import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  .first-img {
    background-image: url("/images/join-fun-first-image.jpg");
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
  .snd-div {
    width: 100%;
    height: 100%;
    background-image: url("images/explore-img.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .snd-heading {
    font-family: var(--silk-font);
    font-size: 60px;
    color: #fff;
    line-height: 70px;
    padding-left: 80px;
    transform: translateX(-700px);
  }
  .snd-parah {
    font-family: var(--normal-font);
    color: #fff;
    padding: 10px 0px 0px 80px;
    transform: translateX(-700px);
  }
  .third-div {
    position: relative;
    width: 100%;
    height: 900px;
    background: #202020;
    overflow-x: hidden;
    flex-direction: column;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .grid-shape {
    width: 100%;
  }
  .left-grid1 {
    position: absolute;
    top: 40%;
    left: -44px;
  }
  .right-grid1 {
    position: absolute;
    top: 0;
    right: -44px;
  }
  .third-data {
    display: flex;
    width: 60%;
    height: 100%;
  }
  .third-left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
  }
  .left-text1 {
    white-space: nowrap;
    color: white;
    transform: rotateZ(270deg);
    font-family: var(--normal-font);
    font-size: 46px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    line-height: 50px;
    font-weight: 500;
  }

  .third-right {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .circle-div {
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 85px;
  }
  .line-img {
    width: 20%;
    height: 4%;
  }
  .line-vertically {
    position: absolute;
    left: 0;
    height: 62.5%;
  }
  .line-vertically1 {
    display: none;
  }
  .circle {
    width: 70px;
    height: 70px;
    display: flex;
    background: #b01f8e;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: var(--normal-font);
    font-size: 18px;
    font-weight: bold;
    margin-right: 20px;
  }
  .circle-text {
    font-family: var(--normal-font);
    font-weight: 500;
    color: #fff;
    font-size: 16px;
    width: 220px;
    transform: translateY(60px);
  }
  @media screen and (min-width: 1300px) {
    .third-div {
      height: 1230px;
    }
    .left-text1 {
      font-size: 54px;
    }
    .circle-div {
      height: 200px;
      padding-left: 118px;
    }
    .circle-text {
      font-size: 18px;
    }
    .line-vertically {
      height: 65%;
    }
    .circle {
      width: 90px;
      height: 90px;
    }
  }
  .second-div {
    position: relative;
    width: 100%;
    height: 700px;
  }
  .video-div {
    width: 100%;
    height: 100%;
  }
  .snd-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .snd-div-data {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .rect-btn {
    width: 320px;
    height: 50px;
    background: #ef3d24;
    border-radius: 8px;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-size: 18px;
    font-family: var(--normal-font);
    font-weight: 600;
    color: white;
    cursor: pointer;
    bottom: 120px;
    position: absolute;
  }
  .logo-img {
    width: 60%;
  }
  .three-div {
    position: relative;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 20px;
    box-sizing: border-box;
  }
  .shoes-div {
    width: 300px;
    height: 400px;
  }
  .shoes-img {
    width: 100%;
  }
  .shoes-heading {
    font-family: var(--normal-font);
    color: #ef3d24;
    font-size: 18px;
    padding-left: 10px;
  }
  .shoes-name {
    font-family: var(--normal-font);
    color: black;
    font-weight: 500;
    padding-left: 10px;
  }
  @media (max-width: 768px) {
    .first-img {
      height: 320px;
    }
    .snd-div {
      height: 320px;
    }
    .snd-heading {
      font-size: 16px;
      line-height: 22px;
      padding-left: 40px;
      animation: move1 2s forwards;
    }
    @keyframes move1 {
      0% {
        transform: translateX(-700px);
      }
      100% {
        transform: translateX(0);
      }
    }
    .snd-parah {
      font-size: 14px;
      line-height: 20px;
      padding-left: 40px;
      width: 70%;
      animation: move2 2s forwards;
    }
    @keyframes move2 {
      0% {
        transform: translateX(-700px);
      }
      100% {
        transform: translateX(0);
      }
    }
    .third-data {
      display: flex;
      flex-direction: column;
    }
    .third-left {
      width: 100%;
      height: 150px;
    }
    .left-text1 {
      transform: rotateZ(0deg);
      font-size: 24px;
      line-height: 30px;
      font-weight: 500;
    }
    .third-right {
      width: 100%;
      justify-content: start;
    }
    .circle-div {
      padding-left: 0;
      height: 120px;
    }
    .circle {
      width: 0px;
      height: 0px;
      padding: 25px;
    }
    .circle-text {
      font-size: 10px;
      transform: translateY(0);
    }
    .line-vertically {
      display: none;
    }
    .line-vertically1 {
      display: block;
      position: absolute;
      left: 0;
      height: 62%;
      top: 59px;
    }
    .right-grid1 {
      position: absolute;
      top: 75%;
      right: -24px;
      width: 50px;
    }
    .left-grid1 {
      position: absolute;
      top: 10%;
      left: -24px;
      width: 50px;
    }
    .second-div {
      height: 300px;
    }
    .rect-btn {
      position: absolute;
      bottom: 30px;
      width:200px;
      height:35px;
      font-size:12px;
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
  }
`;
