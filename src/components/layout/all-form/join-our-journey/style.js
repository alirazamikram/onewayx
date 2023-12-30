import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("images/form-bg-img.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: opacity 0.5s;
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const FormBOx = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    text-align: center;
    gap: 8px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 450px;
    height: 590px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    animation: opacityform 0.5s;
  }
  .collab-text-div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 7px;
    align-items: center;
  }
  @media (max-width: 768px) {
    form {
      width: 360px;
    }
  }

  @keyframes opacityform {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .close-btn {
    position: absolute;
    right: -8px;
    top: -8px;
  }
  .i-btn {
    font-size: 24px;
    cursor: pointer;
    color: #ef3d24;
  }
  .dropdown {
    position: relative;
  }
  .dropdown-btn {
    width: 345px;
    height: 40px;
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    cursor: pointer;
    background: transparent;
    transition: 0.5s;
  }
  .enquiry-text {
    color: rgba(255, 255, 255, 0.8);
    font-family: var(--normal-font);
    font-size: 14px;
  }
  i {
    color: red;
    font-size: 18px;
  }
  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    width: 260px;
    height: auto;
  }
  .dropdown-item:first-child {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    border-radius: 24px 0px 0px 0px;
    background: #202020;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .dropdown-item {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    background: #202020;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .dropdown-item:last-child {
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 15px;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    border-radius: 0px 0px 24px 24px;
    background: #202020;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .option-text {
    color: white;
    font-family: var(--normal-font);
    font-size: 14px;
  }
  .dropdown-item:hover .option-text {
    color: #ef3d24;
  }
  .collab-btn {
    width: 250px;
    height: 45px;
    border-radius: 8px;
    border: 3px solid #ef3d24;
    background: rgba(255, 0, 0, 0.2);
    color: white;
    font-family: var(--normal-font);
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    // position: absolute;
    // bottom: 50px;
  }
  textarea {
    width: 360px;
    border-radius: 24px;
    padding: 10px 0px 0px 15px;
    background: transparent;
    border: 1px solid white;
    outline: none;
    resize: none;
    color: white;
    transition: 0.5s;
  }
  .collab-btn-disable {
    width: 250px;
    height: 45px;
    border-radius: 8px;
    border: 3px solid #ef3d24;
    background: rgba(255, 0, 0, 0.2);
    color: white;
    font-family: var(--normal-font);
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 14px;
    cursor: not-allowed;
    opacity: 0.5;
  }
  textarea:focus {
    border: 1px solid #ef3d24;
  }
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  .heading {
    font-family: var(--silk-font);
    font-weight: bold;
    font-size: 26px;
    padding: 5px 0px;
    color: white;
  }
  .checkmark-div {
    display: flex;
    gap: 3px;
    align-items: center;
  }
  .checkbox-div {
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 14px;
    height: 14px;
    border: 1px solid #ef3d24;
    background: transparent;
  }
  .tick-size {
    font-size: 12px;
    color: #ef3d24;
  }
  .checkbox-parah {
    font-family: var(--normal-font);
    font-size: 9px;
    font-weight: 600;
    color: white;
  }
  .link-privacy-span {
    color: #ef3d24;
    font-family: var(--normal-font);
    font-size: 9px;
    font-weight: 600;
    cursor: pointer;
  }
  .contact-div {
    display: flex;
    gap: 7px;
    align-items: center;
  }
  .email-div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  .email-svg {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .email-parah {
    font-family: var(--normal-font);
    color: white;
    font-size: 10px;
  }
  .btn {
    margin-top: 10px;
  }
  .email-icon {
    color: #ef3d24;
  }
  .dropdown-icon {
    color: #ef3d24;
  }
  a {
    text-decoration: none;
  }

  .input-error-div {
    display: flex;
    flex-direction: column-reverse;
    gap: 3px;
  }
  .error-text {
    font-size: 12px;
    color: #ef3d24;
    font-family: var(--normal-font);
    padding-left: 10px;
    width: 100%;
    text-align: left;
  }
  .error-text-disable {
    display:none;
  }
  .submit-div {
    width:100%;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, 0);
    display:flex;
    flex-direction:column;
    gap:20px;
  z-index:3;
align-items:center;
  }
.parah-on-submit {
  color:white;
  font-size:18px;
  width:90%;
  white-space-nowrap;
  text-align:center;
  font-family:var(--normal-font);
}
  @media (max-width: 768px) {
    textarea {
      width: 300px;
      border-radius: 16px;
    }
    .dropdown-btn {
      width: 300px;
    }
    .checkbox-parah {
      font-size: 6px;
    }
  }
  input {
    width: 360px;
    height: 40px;
    padding-left: 15px;
    border-radius: 24px;
    border: 1px solid white;
    background: transparent;
    outline: none;
    color: white;
    letter-spacing: 0.5px;
    transition: 0.5s;
    @media (max-width: 768px) {
      width: 300px;
    }
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  input:focus {
    border: 1px solid #ef3d24;
  }
`;
