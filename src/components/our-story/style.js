import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #202020;
  overflow-x: clip;

  .first-div {
    background-image: url("/images/our-story-image.jpg");
    background-position: center;
    background-position-y: 0px;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .second-div {
    background: #202020;
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    padding: 60px 20px;
    box-sizing: border-box;
    gap: 40px;
  }
  .grid-img-div1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: 30%;
    position: absolute;
    overflow-x: hidden;
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
  .wrapper {
    width: 100%;
  }
  .out-story-text-img {
    width: 90%;
    padding: 20px 0px;
    transform: translateX(100%);
  }
  .all-text-div {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-100%);
    gap: 20px;
  }
  @media (max-width:768px){
    .all-text-div  {
      transform: translateX(-100%);
      animation:move1 2s forwards;
    }
    @keyframes move1 {
      0% {
        transform:translateX(-100%);
      }
      100% {
        transform:translateX(0);
      }
    }
    .out-story-text-img {
      transform: translateX(100%);
      animation:move2 2s forwards;
    }
    @keyframes move2 {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
  .heading {
    width: 90%;
    font-family: var(--silk-font);
    color: white;
    font-size: 24px;
    letter-spacing: 0.5px;
    text-align: left;
  }
  .paragraph {
    font-family: var(--normal-font);
    color: white;
    width: 90%;
    text-align: left;
  }
  .paragraph2 {
    font-family: var(--normal-font);
    color: white;
    font-size: 18px;
    font-weight: bold;
    width: 90%;
    text-align: left;
  }

  .third-div {
    background-image: url("images/our-story-img.jpg");
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .four-div {
    background: #ef3d24;
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    gap: 40px;
  }
  .four-div-heading {
    font-family: var(--normal-font);
    font-weight: bold;
    font-size: 60px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-shadow: 2px 5px 5px #952515;
    color: #ef3d24;
  }
  .banner-text {
    font-family: var(--normal-font);
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #fff;
    width: 70%;
    line-height: 24px;
    text-align:center;
      }
  .four-paragraph {
    font-family: var(--normal-font);
    color: white;
    font-size: 24px;
    letter-spacing: 0.5px;
  }
  .btn {
    width: 250px;
    height: 45px;
    border-radius: 8px;
    border: 2px solid white;
    background: #871100;
    color: white;
    font-family: var(--normal-font);
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 13px;
    cursor: pointer;
  }
  .btn:hover {
    background: #ef3d29;
    border: none;
    box-shadow: rgb(149, 37, 21) 2px 5px 5px;
  }
  @media (max-width:768px){
    .first-div {
      height:350px;
    }
    .second-div{
      height:450px;
      gap:20px;
    }
    .our-story-text-img {
      padding:10px 0px;
    }
    .all-text-div  {
      width:65%;
    }
    .heading {
      font-size:8px;
      text-align:center;
    }
    .paragraph {
      font-size:8px;
      text-align:center;
    }
    .grid-img-div1 {
      position:absolute;
      top:25%;
    }
    .left-grid,.right-grid {
      width:50px;
    }
    .four-div-heading {
      font-size:40px;
      text-align:center;
    }
    .banner-text {
      font-size:14px;
      width:95%;
      line-height:20px;
    }
    .third-div {
      height:350px;
    }
  }
`;
