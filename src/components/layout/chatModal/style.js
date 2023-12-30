import styled from 'styled-components'
export const ChatWrapper = styled.div`
width:250px;
height:330px;
background:white;
border-radius:10px;
position:absolute;
bottom:40px;
right:20px;
z-index:10;

.input-btn-div {
    display:flex;
    align-items:center;
    position: absolute;
    bottom: 0;   
     border-radius: 0px 0px 10px 10px;
background:black;
}
.chat-input {
    width: 100%;
    height: 30px;
    background: black;
    color: white;
    border: navajowhite;
    outline: none;
    padding: 0px 10px;
    box-sizing: border-box;
    letter-spacing:0.5px;
}
.send-btn {
    width:80px;
    height:30px;
    background:#ef3d24;
    color:white;
    outline:none;
    border:none;
    cursor:pointer;
}
.close-img {
    width: 30px;
    height: 30px;
    position: absolute;
    right: -5px;
    top: -8px;
    cursor:pointer
}
.onewayx-div {
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:60px;
    background:#ef3d24;
    border-radius:10px 10px 0px 0px;
}
.onewayx-text {
font-family:'Montserrat';
font-size:24px;
color:white;
letter-spacing:1px;
}
.animate-text {
    font-family:'Montserrat';
    padding:10px;
    position:relative;
    display:flex;
    flex-direction:column;
    gap:15px;
}
`;