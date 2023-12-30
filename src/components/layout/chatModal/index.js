import React, { useEffect, useState } from "react";
import { ChatWrapper } from "./style";
import TypewriterComponent from "typewriter-effect";
import { set } from "react-hook-form";
const ChatModal = ({ clickFunction }) => {
  const [message, setMessage] = useState("");
  const [button, setButton] = useState(false);
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("");
  const [thanks, setThanks] = useState('');

  useEffect(() => {
    if (button === true) {
      setTimeout(() => {
        setSubmit("Thanks");
        setButton(false)
      }, 2000);
    }
    // setButton(false)
    
  }, [button]);

  const hancleChange = (e) => {
    return setInput(e.target.value);
  };
  const clickHandle = () => {
    setMessage(input);
    setButton(true);
    setInput("");
    setSubmit('')
  };
  return (
    <ChatWrapper>
      <div className="onewayx-div">
        <h3 className="onewayx-text">ONEWAYX</h3>
      </div>
      <div className="animate-text">
        <p style={{width:'auto'}}>{button ? message : "Please leave your message"}</p>
        <p style={{textAlign:'right'}}>{submit}</p>
      </div>

      {/* <p className="animate-text">Please leave your message</p> */}
      <img
        src="images/close.svg"
        className="close-img"
        onClick={clickFunction}
      />
      <div className="input-btn-div">
        <input
          type="text"
          placeholder="How may I help you?"
          className="chat-input"
          value={input}
          onChange={hancleChange}
        />
        <button className="send-btn" onClick={clickHandle}>
          Send
        </button>
      </div>
    </ChatWrapper>
  );
};
export default ChatModal;
