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
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: start;
    justify-content:center;

  align-items: center;
  flex-direction: column;
  width: 480px;
  height: 560px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  gap:10px;
  z-index: 3;
  animation: opacityform 0.5s;
}
  

  @media (max-width: 768px) {
   form {
    width: 350px;
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
  }
  .form-heading {
    font-family: var(--silk-font);
    font-weight: bold;
    font-size: 26px;
    padding: 20px 10px 40px 10px;
    color: #fff;
  }
  .parent-div {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .left {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
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
    color: #ef3d24;
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

  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  textarea {
    width: 360px;
    border-radius: 24px;
    padding: 10px 0px 0px 15px;
    background: transparent;
    border: 1px solid white;
    outline: none;
    resize: none;
    margin-bottom: 10px;
    color: white;
    transition: 0.5s;
  }
  textarea:focus {
    border: 1px solid #ef3d24;
  }
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  p{
    color:white;
    font-size:30px;
  }
  .checkmark-div {
    display: flex;
    gap: 5px;
    align-items: center;
    // margin: 20px 0px 10px 0px;
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
    gap: 10px;
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
    opacity:0.5;
  }
  .email-icon {
    color: #ef3d24;
  }

  a {
    text-decoration: none;
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
  text-align:center;
  white-space-nowrap;
  font-family:var(--normal-font);
}
.input-error-div {
  display:flex;
  flex-direction:column-reverse;
  gap:5px;
}
.error-text{
  font-size: 12px;
    color: #ef3d24;
    font-family: var(--normal-font);
    padding-left: 10px;
}
.error-text-disable {
display:none;
}
.collab-text-div {
  display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
    align-items: center;
}
  @media (max-width: 768px) {
    textarea {
      width: 300px;
      border-radius:16px;
    }
    .checkbox-parah {
      font-size: 6px;
    }
    .parah-on-submit {
      font-size:10px;
    }
    .collab-btn {
      width:170px;
      height:35px;
      font-size:12px;
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
    // margin-bottom:10px;
    letter-spacing:0.5px;
    transition:0.5s;
    @media (max-width:768px){
      width:300px;
} 
  }
  input::placeholder {
    color:rgba(255,255,255,0.8)
  }
  input:focus {
    border:1px solid #ef3d24;
  }

`;
