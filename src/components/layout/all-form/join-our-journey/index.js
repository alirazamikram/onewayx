import React, { useState } from "react";
import { FormBOx, Wrapper } from "./style";
import Input from "../../../shared/input";
import Button from "../../../shared/button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const JoinOurJourney = ({ ClickFunction, props }) => {
  const navigate = useNavigate();
  const [dropdown, setDropDown] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [btn,setBtn] = useState('');
  const [selected, setSelected] = useState("Invester Type");
  const option = ["Angel", "Family Office", "VC", "Introducer"];
  const [state, setState] = useState({
    isSubmitted: false,
    isError: false,
  });
  const submitHandle = ()=> {
    if (showTick === false){
      setBtn(' Please tick our Terms and Conditions and Privacy Policy before submitting')
    }else if (showTick === true){
      setBtn('')
    }else{}
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log("selected", selected);

  const onSubmit = (data) => {
    const formData = new FormData();

    // Hidden field key/values.
    formData.append("u", "12");
    formData.append("f", "12");
    formData.append("s", "s");
    formData.append("c", "0");
    formData.append("m", "0");
    formData.append("act", "sub");
    formData.append("v", "2");
    formData.append("or", "fd5b4c26fec82cc931f0b7d8ba142807");

    // Form field key/values.
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("linkedin", data.linkedin);
    formData.append("selected", selected);
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
            <span className="close-btn" onClick={ClickFunction}>
              <i className="fa-solid fa-circle-xmark i-btn"></i>
            </span>
            <h1 className="heading">Join our journey</h1>
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
              <input
                id="linkedin"
                name="linkedin"
                placeholder="Please enter your Linkedin*"
                className={
                  errors.linkedin ? "c-form__textbox error" : "c-form__textbox"
                }
                {...register("linkedin", { required: true })}
              />
              {errors.linkedin && (
                <div className="validation--error">
                  <p className="error-text">Please enter your Linkedin</p>
                </div>
              )}
            </div>
            <div className="input-error-div">
              <div className="dropdown">
                <div
                  className="dropdown-btn"
                  style={{
                    border: dropdown ? "1px solid #ef3d24" : "1px solid white",
                  }}
                  onClick={() => setDropDown(!dropdown)}
                >
                  <span className="enquiry-text">{selected}</span>
                  {dropdown ? (
                    <i class="fa-sharp fa-solid fa-caret-up dropdown-icon"></i>
                  ) : (
                    <i class="fa-sharp fa-solid fa-caret-down dropdown-icon"></i>
                  )}
                </div>
                {dropdown && (
                  <div className="dropdown-content">
                    {option.map((option) => {
                      return (
                        <div
                          className="dropdown-item"
                          onClick={(e) => {
                            setSelected(option);
                            setDropDown(false);
                          }}
                        >
                          <p className="option-text">{option}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
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
                  value="Join our journey"
                  className="collab-btn"
                  onClick={submitHandle}
                />
              </div>
           
            {/* <Button className="btn">join our Journey</Button> */}
           
          </form>
        ) : (
          <div className="submit-div">
            <p className="parah-on-submit">
              Thank you for providing your information! Together let's shape the
              future of MetaCommerce.<br></br> We are reviewing your information and will
              respond within 48 hours.
            </p>
            <Button
              children="Go Back"
              onClick={ClickFunction}
              className="collab-btn"
            />
          </div>
        )}
      </FormBOx>
      <Wrapper onClick={ClickFunction}></Wrapper>
    </>
  );
};
export default JoinOurJourney;