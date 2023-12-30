import React, { useState } from "react";
import { FormBOx, Wrapper } from "./style";
import Input from "../../../shared/input";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../../shared/button";

const ConnectWithUs = ({ ClickFunction, props }) => {
  const navigate = useNavigate();
  const [showTick, setShowTick] = useState(false);
  const [btn,setBtn] = useState('');
  const location = useLocation();
  const [state, setState] = useState({
    isSubmitted: false,
    isError: false,
  });

  const submitHandle = ()=> {
    if (showTick === false){
      setBtn('Please tick our Terms and Conditions and Privacy Policy before submitting')
    }else if (showTick === true){
      setBtn('')
    }else{}
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();

    // Hidden field key/values.
    formData.append("u", "10");
    formData.append("f", "10");
    formData.append("s", "s");
    formData.append("c", "0");
    formData.append("m", "0");
    formData.append("act", "sub");
    formData.append("v", "2");
    formData.append("or", "ffb61e838cbb193c8ec4dbb5c9d888c9");

    // Form field key/values.
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("ca[1][v]", data.contactmessage);
    // Pass FormData values into a POST request to ActiveCampaign.
    // Mark form submission successful, otherwise return error state.
    fetch("https://onewayx.activehosted.com/proc.php", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => {
        setState({
          isSubmitted: true,
        });
      })
      .catch((err) => {
        setState({
          isError: true,
        });
      });
  };
  const test = ()=>{
  }
  return (
    <>
      <FormBOx>
        {!state.isSubmitted ? (
          <form onSubmit={showTick?handleSubmit(onSubmit):handleSubmit(test)}>
            {location.pathname === "/explore-the-magic" ? (
              <>
                <span className="close-btn" onClick={ClickFunction}>
                  <i className="fa-solid fa-circle-xmark i-btn"></i>
                </span>
              </>
            ) : (
              <>
                <span className="close-btn" onClick={() => navigate("/")}>
                  <i className="fa-solid fa-circle-xmark i-btn"></i>
                </span>
              </>
            )}
            <h1 className="form-heading">Connect with us</h1>
            <div className="input-error-div">
              <input
                id="fullname"
                name="fullname"
                placeholder="Your Name*"
                className={
                  errors.fullname ? "c-form__textbox error" : "c-form__textbox"
                }
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <div className="validation--error">
                  <p className="error-text">Please enter your name</p>
                </div>
              )}
            </div>
            <div className="input-error-div">
              <input
                id="email"
                name="email"
                placeholder="Your Email*"
                className={
                  errors.contactemail
                    ? "c-form__textbox error"
                    : "c-form__textbox"
                }
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
              />
              {errors.email && (
                <div className="validation--error">
                  <p className="error-text">Please enter a valid email</p>
                </div>
              )}
            </div>
            <div className="input-error-div">
              <textarea
                id="contactmessage"
                rows="7"
                cols="50"
                name="contactmessage"
                placeholder="Your Message"
                className={
                  errors.contactmessage
                    ? "c-form__textarea error"
                    : "c-form__textarea"
                }
              />
            </div>
            <div className="checkmark-div">
              <div
                className="checkbox-div"
                onClick={() => setShowTick(!showTick)}
              >
                {showTick ? <i class="fa fa-check tick-size"></i> : ""}
              </div>
              <p className="checkbox-parah">
                By completing this form, you will be subject to our{" "}
                <a href="/terms-and-conditions">
                  <span className="link-privacy-span">
                    Terms and Conditions
                  </span>{" "}
                </a>
                &{" "}
                <a href="/privacy-policy">
                  <span className="link-privacy-span">Privacy Policy</span>
                </a>
              </p>
            </div>
            <div className="contact-div">
              <div className="email-div">
                <span className="email-svg">
                  <i class="fa-solid fa-envelope email-icon"></i>
                </span>
                <p className="email-parah">hello@onewayx.com</p>
              </div>
            </div>
              <div className="collab-text-div">
              
                <p className={showTick ? 'error-text-disable' : "error-text"}>
                  {btn}
                </p>
                <input
                  type="submit"
                  value="Connect with us"
                  className="collab-btn"
                  onClick={submitHandle}
                />
              </div>
               
               
            {state.isError ? (
              <p style={{ color: "white" }}>
                Unfortunately, your submission could not be sent. Please try
                again later.
              </p>
            ) : null}
          </form>
        ) : (
          <div className="submit-div">
            <p className="parah-on-submit">
              Thank you for providing your information! Together, let's make
              magic.<br></br> We are reviewing your information and will respond within
              48 hours.
            </p>
            <Button
              children="Go Back"
              onClick={() => navigate("/")}
              className="collab-btn"
            />
          </div>
        )}
      </FormBOx>
      <Wrapper onClick={ClickFunction}></Wrapper>
    </>
  );
};
export default ConnectWithUs;
