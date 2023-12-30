import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0px 60px;
  box-sizing: border-box;
  align-items: center;
  background: transparent;
  position: fixed;
  z-index: 1;
  @media (max-width:768px){
      padding:0px 30px;
    
  }

  .nav-wrapper {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0px 60px;
    box-sizing: border-box;
    align-items: center;
    background: white;
    position: absolute;
    left: 0;
    z-index: 1;
    border-bottom: 2px solid red;
  }
  .left {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .nav-logo {
    width: 200px;
    cursor: pointer;
  }
  .nav-btn-show {
    position: absolute;
    top: 95px;
    width: 30px;
    cursor: pointer;
  }
  .nav-btn-hide {
    display: none;
  }

  .logo {
    width: 150px;
    cursor: pointer;
  }
  .home-logo {
    width: 200px;
    position: absolute;
    top: 40px;
    right: 50px;
  }
  .show-opacity {
    width: 30px;
    cursor: pointer;
  }
  .hide-opacity {
    opacity: 0;
  }
  @media (max-width:768px){
    .nav-wrapper {
      padding:0px 20px;
    }
  }
`;
export const Toogle = styled.div`
  .show-toogle {
    z-index: 100;
    width: 300px;
    height: 340px;
    position: fixed;
    top: 100px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: 0.5s;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  .hide-toogle {
    z-index: 100;
    position: fixed;
    top: 100px;
    left: -300px;
    width: 0px;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.5s;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: left;
    list-style: none;
  }
  ul li {
    font-size: 16px;
    text-transform: uppercase;
    color: white;
    font-family: var(--normal-font);
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-color: white;
    cursor: pointer;
  }
  ul li:hover {
    font-size: 16px;
    text-transform: uppercase;
    color: #ef3d24;
    font-family: var(--normal-font);
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-color: #ef3d24;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;

export const NavBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;
