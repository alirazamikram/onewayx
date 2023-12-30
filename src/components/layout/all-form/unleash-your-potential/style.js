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
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 6px;
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
  
  @media(max-width:768px){
    form{
      width:350px;
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
  .box-heading {
    font-family: var(--silk-font);
    font-weight: bold;
    font-size: 20px;
    padding: 5px;
    color: #fff;
  }
  textarea {
    width: 360px;
    border-radius: 24px;
    padding: 10px 0px 0px 15px;
    background: transparent;
    border: 1px solid white;
    outline: none;
    resize: none;
    margin-bottom: 5px;
    color: white;
    transition: 0.5s;
  }
  textarea:focus {
    border: 1px solid #ef3d24;
  }
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  .checkmark-div {
    display: flex;
    gap: 3px;
    align-items: center;
    margin-bottom: 5px;
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
    gap: 5px;
    align-items: center;
  }
  .email-div {
    display: flex;
    gap: 3px;
    align-items: center;
  }
  i {
    color: red;
    font-size: 20px;
  }
  .email-svg {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .email-icon {
    color: #ef3d24;
  }
  .email-parah {
    font-family: var(--normal-font);
    color: white;
    font-size: 10px;
  }
  .collab-btn {
    margin-bottom: 5px;
  }
  a {
    text-decoration: none;
  }
  .submit-div {
    width:100%;
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%, 0);
    display:flex;
    flex-direction:column;
    gap:10px;
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
    margin-top: 5px;
    align-items: center;
}
  @media (max-width: 768px) {
  textarea{
    width:300px;
    border-radius:16px;
  }
  .dropdown-btn{
    width: 300px;
  }
  .checkbox-parah{
    font-size:6px;
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
