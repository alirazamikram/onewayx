import { React, useState } from "react";
import { CardContainer, BgClick, Wrapper } from "./style";

const Cards = () => {
  const [annie, setAnnie] = useState(false);
  const [alan, setAlan] = useState(false);
  const [praveen, setPraveen] = useState(false);
  return (
    <>
      <CardContainer>
        {alan ? (
          <Wrapper>
            <div className="img-div">
              <img src="images/alan.jpeg" alt="Annie" className="avatar-img" />
            </div>
            <div className="avater-bio-card">
              <div className="all-text">
                <h3 className="bio-card-name">Alan HAU</h3>
                <h3 className="ceo-founder-text">
                  Creative Director & Co-Founder
                </h3>
                <p className="card-description">
                  Creative Visionary: A seasoned entrepreneur with 20+ years of
                  experience in arts, design, and creative industries.
                </p>
                <p className="card-description">
                  Strategic Achiever: As Artistic Director & Global Head of
                  Creative Partnerships at Virtual Touch HK, Alan secured
                  HKD2.5M seed funding and excelled in leadership roles at
                  Nottingham Trent University and Art Thread.
                </p>
                <p className="card-description">
                  Innovator and Educator: Alan's passion for creativity and
                  education drives innovation, making him a prominent figure in
                  the industry.
                </p>
                <div className="linkedin-div">
                  {/* <p className="linkedin-text">LinkedIn:</p> */}
                  <a
                    href=" https://www.linkedin.com/in/alancphau/ "
                    target="-blank"
                    className="linkedin-link"
                  >
                   <i class="fa-brands fa-linkedin" style={{color: '#3371db'}}></i>
                  </a>
                </div>
              </div>
            </div>
          </Wrapper>
        ) : (
          <div className="card">
            <div className="img-div">
              <img src="images/alan.jpeg" alt="Annie" className="avatar-img" />
            </div>
            {/* <h1 className="avater-name"></h1> */}
            <p className="avater-bio">
              ALAN HAU
              <br />
              Creative Director & Co-Founder
              <br />
              The Creative Genius
              <br />
              <span className="read-more-btn" onClick={() => setAlan(true)}>
                Read More &gt;
              </span>
            </p>
          </div>
        )}
        {annie ? (
          <Wrapper>
            <div className="img-div">
              <img src="images/annie.jpeg" alt="Annie" className="avatar-img" />
            </div>
            <div className="avater-bio-card">
              <div className="all-text">
                <h3 className="bio-card-name">Annie Siara</h3>
                <h3 className="ceo-founder-text">
                  Annie Siara CEO & Co-Founder
                </h3>
                <p className="card-description">
                  Visionary Entrepreneur: Dynamic leader and a second-time
                  founder with international experience in the startup and
                  corporate worlds across retail, casinos, and prop-tech
                  industries.
                </p>
                <p className="card-description">
                  Savvy Business Leader: Achieved the successful launch of six
                  multi-billion dollar integrated resort projects across Asia
                  and played a pivotal role in leading a prop-tech startup to
                  achieve product-market fit, resulting in a successful exit.
                </p>
                <p className="card-description">
                  Creative Business Mind: Unique blend of creativity and
                  commercial acumen, positioning her as a prominent leader in
                  Shaping the Future of the MetaCommerce industry.
                </p>
                <div className="linkedin-div">
                  {/* <p className="linkedin-text">LinkedIn:</p> */}
                  <a
                    href="https://www.linkedin.com/in/anniesiara/"
                    className="linkedin-link"
                    target="-blank"
                  >
                    <i class="fa-brands fa-linkedin" style={{color: '#3371db'}}></i>
                  </a>
                </div>
              </div>
            </div>
          </Wrapper>
        ) : (
          <div className="card">
            <div className="img-div">
              <img src="images/annie.jpeg" alt="Annie" className="avatar-img" />
            </div>
            {/* <h1 className="avater-name">Annie Siara</h1> */}
            <p className="avater-bio">
              ANNIE SIARA
              <br />
              CEO & Founder
              <br />
              The Visionair
              <br />
              <span className="read-more-btn" onClick={() => setAnnie(true)}>
                Read More &gt;
              </span>
            </p>
          </div>
        )}

        {praveen ? (
          <Wrapper>
            <div className="img-div">
              <img
                src="images/praveen.jpeg"
                alt="Annie"
                className="avatar-img"
              />
            </div>
            <div className="avater-bio-card">
              <div className="all-text">
                <h3 className="bio-card-name">PT </h3>
                <h3 className="ceo-founder-text">CTO & Co-Founder</h3>
                <p className="card-description">
                  Seasoned Transformation Expert: Technology enthusiast with
                  global Technology & Business transformation experiences,
                  spanning across diverse business segments.
                </p>
                <p className="card-description">
                  Tech Innovator: A second-time founder with a passion for
                  cutting-edge technologies like Cloud, IoT, Mobility,
                  Blockchain, and Machine Learning.
                </p>
                <p className="card-description">
                  Solution Architect Extraordinaire: Specialising in Web2 and
                  Web3 stacks, including AWS Cloud services, Blockchain, and
                  machine learning tools, Praveen loves designing pathbreaking
                  and scalable solutions.{" "}
                </p>
              </div>
            </div>
          </Wrapper>
        ) : (
          <div className="card">
            <div className="img-div">
              <img
                src="images/praveen.jpeg"
                alt="Annie"
                className="avatar-img"
              />
            </div>
            {/* <h1 className="avater-name"> </h1> */}
            <p className="avater-bio">
              PT <br />
              CTO & CO-FOUNDER
              <br />
              The Tech Innovator
              <br />
              <span className="read-more-btn" onClick={() => setPraveen(true)}>
                Read More &gt;
              </span>
            </p>
          </div>
        )}
      </CardContainer>

      {annie ? <BgClick onClick={() => setAnnie(false)} /> : ""}
      {alan ? <BgClick onClick={() => setAlan(false)} /> : ""}
      {praveen ? <BgClick onClick={() => setPraveen(false)} /> : ""}
    </>
  );
};
export default Cards;
