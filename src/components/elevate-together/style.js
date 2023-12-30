import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  .first-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
    height: 100%;
    background-image: url("/images/partnership-img.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .logo-white {
    width: 50%;
  }
  .first-text {
    font-family: var(--normal-font);
    font-size: 45px;
    font-weight: 500;
    letter-spacing: 6px;
    color: white;
  }
  .snd-div {
    position: relative;
    z-index: -1;
    width: 100%;
    height: auto;
    background: #202020;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    overflow-x: hidden;
  }
  .elevate-text {
    position: absolute;
    left: 80px;
    width: 155px;
    top: 23%;
  }
  .together-text {
    position: absolute;
    right: 80px;
    width: 155px;
    bottom: 23%;
  }
  .grid-shape {
    width: 100%;
  }
  .left-grid1 {
    position: absolute;
    top: 5%;
    left: -30px;
  }
  .right-grid1 {
    position: absolute;
    top: 20%;
    right: -22px;
  }
  .left-grid2 {
    position: absolute;
    top: 50%;
    left: -30px;
  }
  .right-grid2 {
    position: absolute;
    top: 70%;
    right: -22px;
  }
  .all-text {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .snd-div-heading {
    font-family: var(--silk-font);
    font-size: 25px;
    color: #b01f8e;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }

  .snd-paragraph {
    padding: 40px 0px 10px 0px;
    color: white;
    font-family: var(--normal-font);
    letter-spacing: 0.7px;
    font-weight: 500;
    line-height: 22px;
    text-transform: uppercase;
    text-align: center;
  }
  .snd-parah {
    color: white;
    font-family: var(--inter-font);
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }
  .card-parent {
    width: 100%;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card-one-div {
    width: 100%;
    height: 270px;
    perspective: 1000px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .card-two-div {
    width: 100%;
    height: 270px;
    perspective: 1000px;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .card {
    padding: 20px;
    box-sizing: border-box;
    width: 350px;
    height: auto;
    border: 4px solid #b01f8e;
    border-radius: 24px;
    transform-style: preserve-3d;
    transform: rotateY(30deg);
    margin: 20px 0px;
  }
  .card2 {
    padding: 20px;
    box-sizing: border-box;
    width: 350px;
    height: auto;
    border: 4px solid #313a96;
    border-radius: 24px;
    transform-style: preserve-3d;
    transform: rotateY(-30deg);
    margin: 20px 0px;
  }
  .card-heading {
    font-family: var(--normal-font);
    color: #fff;
    font-size: 28px;
  }
  .card-parah {
    padding-top: 10px;
    font-family: var(--normal-font);
    color: #fff;
    font-size: 16px;
  }
  .card-span {
    font-family: var(--normal-font);
    color: #b01f8e;
    font-size: 16px;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;
  }
  .card-span2 {
    font-family: var(--normal-font);
    color: #313a96;
    font-size: 16px;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;
  }
  @media screen and (min-width: 1300px) {
    .card-one-div {
      height: auto;
    }
    .card-two-div {
      height: auto;
    }
    .card {
      width: 400px;
      padding: 30px;
    }
    .card2 {
      width: 400px;
      padding: 30px;
    }
    .card-heading {
      font-size: 38px;
    }
    .card-parah {
      font-size: 18px;
    }
    .card-span {
      padding-top: 5px;
      font-size: 18px;
    }
    .card-span2 {
      padding-top: 5px;
      font-size: 18px;
    }
  }

  .third-div {
    position: relative;
    z-index: -1;
    width: 100%;
    height: 430px;
    background-image: url("images/brand.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .bg-blur {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    .first-div {
      height: 350px;
    }
    .first-text {
      font-size: 12px;
      letter-spacing: 1.5px;
      text-align: center;
    }
    .snd-div {
      padding-top: 40px;
    }
    .snd-div-heading {
      font-size: 11px;
      text-align: center;
    }
    .snd-paragraph {
      font-size: 10px;
      padding: 10px 0px;
      line-height:16px;
    }
    .snd-parah {
      font-size: 10px;
    }
    .left-grid1 {
      position: absolute;
      top: 5%;
      left: -25px;
      width: 50px;
    }
    .right-grid1 {
      position: absolute;
      top: 20%;
      right: -23px;
      width: 50px;
    }
    .left-grid2 {
      width: 50px;
      position: absolute;
      top: 50%;
      left: -25px;
    }
    .right-grid2 {
      position: absolute;
      top: 70%;
      right: -23px;
      width: 50px;
    }

    .card-one-div,
    .card-two-div {
      height: 180px;
      display: flex;
    justify-content: center;
    align-items: center;
    }
    .card {
      width: 225px;
      height: 160px;
      border-radius: 16px;
      margin: 0px;
      transform: rotateY(30deg);
      padding: 12px;
      border-radius: 12px;
    }
    .card2 {
      width: 225px;
      height: 160px;
      border-radius: 16px;
      margin: 0px;
      transform: rotateY(-30deg);
      padding: 12px;
      border-radius: 12px;
    }
    .card-heading {
      font-size: 16px;
    }
    .card-parah {
      font-size: 10px;
    }
    .card-span,
    .card-span2 {
      font-size: 10px;
      padding-top:5px;
    }
    .third-div {
      height: 300px;
    }
    .elevate-text {
      position: absolute;
      left: 30px;
      width: 60px;
      top: 40%;
    }
    .together-text {
      position: absolute;
      right: 30px;
      width: 60px;
      bottom: 10%;
    }
  }
`;
