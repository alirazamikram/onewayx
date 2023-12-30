import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;

  .img-div {
    width: 100%;
    height: 100%;
    background-image: url("images/our-story-image.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
  }
  .blur-div {
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.9;
  }

  .video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .cube-div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes size {
    0% {
      width: 80px;
    }
    100% {
      width: 100px;
    }
  }
  .luxury-text-div {
    width: 100%;
    height: 100%;
    background: transparent;
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content:center;
    align-items: center;
  }
  .luxury-text {
    font-family: var(--normal-font);
    font-size: 120px;
    font-weight: bold;
    color: white;
    opacity: 0.5;
    text-transform: uppercase;
    white-space: nowrap;
  }
 @media (max-width:768px){
  .luxury-text {
    font-size:40px
  }
 }
`;
