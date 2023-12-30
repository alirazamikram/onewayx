import styled from "styled-components";

export const MainWrapper = styled.div`
  .card {
    width: 280px;
    height: 390px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img-div {
    width: 120px;
    height: 120px;
    background: blue;
    border-radius: 50%;
    border: 3px solid red;
    box-sizing: border-box;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid white;
  }
  .avater-name {
    font-size: 16px;
    color: white;
    font-family: var(--normal-font);
    font-weight: bold;
    text-align: center;
    padding-top: 10px;
    text-transform: uppercase;
  }
  .avater-bio {
    width: 100%;
    font-size: 14px;
    color: white;
    font-family: var(--inter-font);
    font-weight: bold;
    text-align: center;
    padding: 10px 0px;
    line-height: 20px;
  }
  .read-more-btn {
    padding-top: 10px;
    font-size: 10px;
    color: white;
    font-family: var(--inter-font);
    font-weight: bold;
    cursor: pointer;
  }
  .read-more-btn:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
export const BgClick = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;
export const Wrapper = styled.div`
  width: 280px;
  height: 390px;
  position: relative;
  z-index: 100;

  .img-div {
    position: absolute;
    z-index: 10;
    width: 80px;
    height: 80px;
    background: blue;
    border-radius: 50%;
    border: 3px solid red;
    box-sizing: border-box;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid white;
  }

  .avater-bio-card {
    width: 230px;
    height: 350px;
    border-radius: 16px;
    background: white;
    position: absolute;
    left: 35px;
    top: 35px;
    animation: animate 0.5s;
  }
  @keyframes animate {
    0% {
      height: 0px;
    }
    100% {
      height: 350px;
    }
  }
  .all-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    animation: anima 0.5s;
  }
  @keyframes anima {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .bio-card-name {
    font-family: var(--normal-font);
    font-weight: 600;
    color: red;
    font-size: 16px;
    padding-top: 10px;
    text-transform:uppercase;
    padding-left:10px;
  }
  .ceo-founder-text {
    font-family: var(--normal-font);
    font-weight: 600;
    color: black;
    padding: 5px 0px 10px 0px;
    font-size: 10px;
    padding-left:10px;
  }
  .card-description {
    line-height: 16px;
    font-size: 9px;
    width: 90%;
    font-family: var(--inter-font);
    padding-top: 8px;
    font-weight: bold;
  }
  .linkedin-div {
    display: flex;
    padding-top: 8px;
    padding-left: 25px;
    width: 100%;
    gap: 8px;
    align-items: center;
  }

  .linkedin-text {
    font-size: 12px;
    font-family: var(--normal-font);
    font-weight: bold;
  }
  .linkedin-link {
    font-size: 18px;
    font-family: var(--inter-font);
    color: blue;
    font-weight: bold;
    cursor: pointer;
  }
  i {
    font-size: 25px;
  }
`;
