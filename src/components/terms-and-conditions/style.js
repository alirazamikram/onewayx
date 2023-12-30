import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  padding-top: 120px;
  @media (max-width: 768px) {
    padding: 30px;
    padding-top: 120px;
  }

  .first-heading2 {
    font-family: var(--silk-font);
    color: black;
    font-size: 24px;
    padding-bottom: 20px;
    text-transform: uppercase;
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
    text-align: left;
    width: 100%;
  }
  .last-text {
    font-family: var(--normal-font);
    font-size: 15px;
    padding: 15px 0px;
    text-align: left;
    width: 100%;
  }
  .policy-text {
    font-family: var(--normal-font);
    font-size: 15px;
    width: 95%;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    .first-heading2 {
      font-size: 16px;
      white-space: nowrap;
    }
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
 
`;
