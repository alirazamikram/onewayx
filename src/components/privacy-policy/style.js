import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  .table-div {
    width: 70%;
    height: auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    @media (min-width: 1450px) {
      width: 700px;
    }
  }

  .big-card {
    width: 220px;
    height: 300px;
    padding: 10px;
    box-sizing: border-box;
    background: powderblue;
  }
  .table-card {
    width: 220px;
    height: 220px;
    padding: 10px;
    box-sizing: border-box;
    background: powderblue;
  }
  .table-card-small {
    width: 220px;
    height: 150px;
    background: powderblue;
    padding: 10px;
    box-sizing: border-box;
  }
  .box-text {
    font-family: var(--normal-font);
    font-size: 15px;
    text-align: left;
  }
`;
export const TabDiv = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  .tab-div {
    width: 70%;
    height: 70px;
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    padding: 0px 20px;
    box-sizing: border-box;
  }
  .active-heading {
    font-family: var(--silk-font);
    color: #ef3d24;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .snd-heading {
    font-family: var(--silk-font);
    color: black;
    font-size: 20px;
    text-transform: uppercase;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .active-heading,
    .snd-heading {
      font-size: 12px;
      white-space: nowrap;
    }
  }
`;
export const MainBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 80px 80px 80px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 10px 30px;
  }

  .first-heading {
    font-family: var(--silk-font);
    color: black;
    font-size: 24px;
    padding: 20px 0px 10px 0px;
    text-transform: uppercase;
  }
  .first-heading2 {
    font-family: var(--silk-font);
    color: black;
    font-size: 24px;
    padding-bottom: 20px;
    text-transform: uppercase;
  }

  .introduction-title {
    font-family: var(--normal-font);
    color: black;
    font-size: 14px;
    text-transform: uppercase;
    padding: 10px 0px;
    width: 100%;
    padding: 20px 0px;
  }

  .list-div {
    width: 100%;
  }
  ul {
    padding-left: 20px;
  }
  ul li {
    font-family: var(--normal-font);
    font-size: 15px;
    width: 95%;
    line-height: 24px;
    text-transform: uppercase;
    list-style-type: disclosure-closed;
  }
  .first-li {
    list-style-type: none;
  }
  .no-text-div {
    display: flex;
    gap: 10px;
  }
  .no-text {
    font-family: var(--normal-font);
    font-size: 15px;
    font-weight: bold;
    line-height: 24px;
  }
  .text-a-div {
    display: flex;
    gap: 10px;
    padding-left: 30px;
  }
  ${
    "" /* .text-a-no {
    font-family: var(--normal-font);
    font-size: 15px;
    font-weight: bold;
    line-height: 24px;
  } */
  }
  .text-a {
    font-family: var(--normal-font);
    font-size: 15px;
    width: 95%;
    line-height: 24px;
  }
  .heading-text {
    font-family: var(--normal-font);
    font-size: 18px;
    font-weight: bold;
    padding: 15px 0px;
  }
  .policy-text {
    font-family: var(--normal-font);
    font-size: 15px;
    width: 95%;
    line-height: 24px;
  }
`;
export const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  .heading-text {
    font-family: var(--normal-font);
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0px;
  }

  .policy-text {
    font-family: var(--normal-font);
    font-size: 15px;
    width: 95%;
    line-height: 24px;
  }
  .sub-option {
    font-family: var(--normal-font);
    font-size: 15px;
    padding-left: 30px;
  }
  .span-highlight {
    color: orange;
  }
`;
