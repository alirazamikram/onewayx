import styled from "styled-components";

export const Wrapper = styled.div`
  .video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .bg-blur {
    background: black;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }
`;
