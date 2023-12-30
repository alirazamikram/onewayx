import React, { useState } from "react";
import { BgClick, MainWrapper, Wrapper } from "./style";

const AnnieCard = () => {
  const [annie, setAnnie] = useState(false);

  return (
    <MainWrapper>
      {annie ? (
        <Wrapper>
          <div className="img-div">
            <img src="images/annie.jpeg" alt="Annie" className="avatar-img" />
          </div>
          <div className="avater-bio-card">
            <div className="all-text">
              <div>
                <h3 className="bio-card-name">Annie Siara</h3>
                <h3 className="ceo-founder-text">CEO & Co-Founder</h3>
              </div>
              <p className="card-description">
                Visionary Entrepreneur: Dynamic leader and a second-time founder
                with international experience in the startup and corporate
                worlds across retail, casinos, and prop-tech industries.
              </p>
              <p className="card-description">
                Savvy Business Leader: Achieved the successful launch of six
                multi-billion dollar integrated resort projects across Asia and
                played a pivotal role in leading a prop-tech startup to achieve
                product-market fit, resulting in a successful exit.
              </p>
              <p className="card-description">
                Creative Business Mind: Unique blend of creativity and
                commercial acumen, positioning her as a prominent leader in
                Shaping the Future of the MetaCommerce industry.
              </p>
              <div className="linkedin-div">
                <p className="linkedin-text">Lets Connect &gt;</p>
                <a
                  href="https://www.linkedin.com/in/anniesiara/"
                  className="linkedin-link"
                  target="-blank"
                >
                  <i
                    class="fa-brands fa-linkedin"
                    style={{ color: "#3371db" }}
                  ></i>
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
          <p className="avater-bio">
            ANNIE SIARA
            <br />
            CEO & Co-Founder
            <br />
            The Visionnaire
            <br />
            <span className="read-more-btn" onClick={() => setAnnie(true)}>
              Read More &gt;
            </span>
          </p>
        </div>
      )}
      {annie ? <BgClick onClick={() => setAnnie(false)} /> : ""}
    </MainWrapper>
  );
};

const PTCard = () => {
  const [praveen, setPraveen] = useState(false);
  return (
    <MainWrapper>
      {praveen ? (
        <Wrapper>
          <div className="img-div">
            <img src="images/praveen.jpeg" alt="Annie" className="avatar-img" />
          </div>
          <div className="avater-bio-card">
            <div className="all-text">
              <div>
                <h3 className="bio-card-name">PT </h3>
                <h3 className="ceo-founder-text">Co-Founder</h3>
              </div>
              <p className="card-description">
                Seasoned Transformation Expert: Technology enthusiast with
                global Technology & Business transformation experiences,
                spanning across diverse business segments.
              </p>
              <p className="card-description">
                Tech Innovator: A second-time founder with a passion for
                cutting-edge technologies like Cloud, IoT, Mobility, Blockchain,
                and Machine Learning.
              </p>
              <p className="card-description">
                Solution Architect Extraordinaire: Specialising in Web2 and Web3
                stacks, including AWS Cloud services, Blockchain, and machine
                learning tools, Praveen loves designing pathbreaking and
                scalable solutions.{" "}
              </p>
            </div>
          </div>
        </Wrapper>
      ) : (
        <div className="card">
          <div className="img-div">
            <img src="images/praveen.jpeg" alt="Annie" className="avatar-img" />
          </div>
          <p className="avater-bio">
            PT <br />
            CTO & Co-Founder
            <br />
            The Tech Innovator
            <br />
            <span className="read-more-btn" onClick={() => setPraveen(true)}>
              Read More &gt;
            </span>
          </p>
        </div>
      )}
      {praveen ? <BgClick onClick={() => setPraveen(false)} /> : ""}
    </MainWrapper>
  );
};
const ZainCard = () => {
  const [praveen, setPraveen] = useState(false);

  return (
    <MainWrapper>
      {praveen ? (
        <Wrapper>
          <div className="img-div">
            <img
              src="images/zain-avater.jpg"
              alt="Zain"
              className="avatar-img"
            />
          </div>
          <div className="avater-bio-card">
            <div className="all-text">
              <div>
                <h3 className="bio-card-name">ZAIN UL ABEDEEN </h3>
                <h3 className="ceo-founder-text">Metaverse Developer</h3>
              </div>
              <p className="card-description">
              Driving the Metaverse Vision: Revolutionising the commerce landscape with immersive technologies. With an in-depth understanding of Metaverse technologies and a passion for pioneering cutting-edge retail solutions.
              </p>
              <div className="linkedin-div">
                {/* <p className="linkedin-text">Lets Connect &gt;</p>
                <a
                  href="https://www.linkedin.com/in/mrfreak72"
                  className="linkedin-link"
                  target="-blank"
                >
                  <i
                    class="fa-brands fa-linkedin"
                    style={{ color: "#3371db" }}
                  ></i>
                </a> */}
              </div>
            </div>
          </div>
        </Wrapper>
      ) : (
        <div className="card">
          <div className="img-div">
            <img
              src="images/zain-avater.jpg"
              alt="Zain"
              className="avatar-img"
            />
          </div>
          {/* <h1 className="avater-name"> </h1> */}
          <p className="avater-bio">
            ZAIN UL ABEDEEN
            <br />
            Metaverse Developer
            <br />
           The Metaverse Guy<br />

            <span className="read-more-btn" onClick={() => setPraveen(true)}>
              Read More &gt;
            </span>
          </p>
        </div>
      )}
      {praveen ? <BgClick onClick={() => setPraveen(false)} /> : ""}
    </MainWrapper>
  );
};
const MansoorCard = () => {
  const [praveen, setPraveen] = useState(false);

  return (
    <MainWrapper>
      {praveen ? (
        <Wrapper>
          <div className="img-div">
            <img src="images/mansoor.png" alt="Annie" className="avatar-img" />
          </div>
          <div className="avater-bio-card">
            <div className="all-text">
              <div>
                <h3 className="bio-card-name">MANSOOR AHMED</h3>
                <h3 className="ceo-founder-text">Creative Graphic Designer</h3>
              </div>
              <p className="card-description">
              Mansoor crafts compelling visual experiences through his UX/UI design skills. With an aesthetic savvy and a user-centered design approach, he ensures our products are visually stunning and user-friendly. 
              </p>
              <div className="linkedin-div">
                {/* <p className="linkedin-text">Lets Connect &gt;</p>
                <a
                  href="https://www.linkedin.com/in/syed-mansoor-ahmad-shah-2b226319a/"
                  className="linkedin-link"
                  target="-blank"
                >
                  <i
                    class="fa-brands fa-linkedin"
                    style={{ color: "#3371db" }}
                  ></i>
                </a> */}
              </div>
            </div>
          </div>
        </Wrapper>
      ) : (
        <div className="card">
          <div className="img-div">
            <img src="images/mansoor.png" alt="Annie" className="avatar-img" />
          </div>
          {/* <h1 className="avater-name"> </h1> */}
          <p className="avater-bio">
            MANSOOR AHMED SHAH <br />
            Creative Graphic Designer (UX/UI) 
            <br />
            The Design Wizard<br />
            <span className="read-more-btn" onClick={() => setPraveen(true)}>
              Read More &gt;
            </span>
          </p>
        </div>
      )}
      {praveen ? <BgClick onClick={() => setPraveen(false)} /> : ""}
    </MainWrapper>
  );
};
const FarhanCard = () => {
  const [praveen, setPraveen] = useState(false);

  return (
    <MainWrapper>
      {praveen ? (
        <Wrapper>
          <div className="img-div">
            <img
              src="images/farhan-avater.jpg"
              alt="Annie"
              className="avatar-img"
            />
          </div>
          <div className="avater-bio-card">
            <div className="all-text">
              <div>
                <h3 className="bio-card-name"> FARHAN SAJID</h3>
                <h3 className="ceo-founder-text">
                  Blockchain and Web Developer
                </h3>
              </div>
              <p className="card-description">
              Combining proficiency in blockchain and web development, Farhan brings a unique and robust skill set. His knowledge of decentralised technologies enhances our immersive solutions, providing secure, transparent, and cutting-edge web experiences and enabling innovative applications in blockchain technology.
              </p>
              <div className="linkedin-div">
                {/* <p className="linkedin-text">Lets Connect &gt;</p>
                <a
                  href="https://www.linkedin.com/in/farhan-sajid-711154220"
                  className="linkedin-link"
                  target="-blank"
                >
                  <i
                    class="fa-brands fa-linkedin"
                    style={{ color: "#3371db" }}
                  ></i>
                </a> */}
              </div>
            </div>
          </div>
        </Wrapper>
      ) : (
        <div className="card">
          <div className="img-div">
            <img
              src="images/farhan-avater.jpg"
              alt="Annie"
              className="avatar-img"
            />
          </div>
          {/* <h1 className="avater-name"> </h1> */}
          <p className="avater-bio">
            FARHAN SAJID <br />
            Blockchain and Web Developer 
            <br />
            The Development Guru <br />
            <span className="read-more-btn" onClick={() => setPraveen(true)}>
              Read More &gt;
            </span>
          </p>
        </div>
      )}
      {praveen ? <BgClick onClick={() => setPraveen(false)} /> : ""}
    </MainWrapper>
  );
};
const HasnatCard = () => {
  const [praveen, setPraveen] = useState(false);

  return (
    <MainWrapper>
      {praveen ? (
        <Wrapper>
          <div className="img-div">
            <img
              src="images/hasnat-avater.jpg"
              alt="Annie"
              className="avatar-img"
            />
          </div>
          <div className="avater-bio-card">
            <div className="all-text">
              <div>
                <h3 className="bio-card-name"> HASNAAT</h3>
                <h3 className="ceo-founder-text">3D Artist & Animator</h3>
              </div>
              <p className="card-description">
              Creating engaging and lifelike 3D animations is Hasnaat's forte. His exceptional skills in 3D art and animation bring our metaverse experiences to life, adding an extra layer of realism and engagement.
              </p>
              <div className="linkedin-div">
                {/* <p className="linkedin-text">Lets Connect &gt;</p>
                <a
                  href="https://www.linkedin.com/in/hasnat-ahmed-khan-3b0b5b179/"
                  className="linkedin-link"
                  target="-blank"
                >
                  <i
                    class="fa-brands fa-linkedin"
                    style={{ color: "#3371db" }}
                  ></i>
                </a> */}
              </div>
            </div>
          </div>
        </Wrapper>
      ) : (
        <div className="card">
          <div className="img-div">
            <img
              src="images/hasnat-avater.jpg"
              alt="Annie"
              className="avatar-img"
            />
          </div>
          {/* <h1 className="avater-name"> </h1> */}
          <p className="avater-bio">
            HASNAAT
            <br />
            3D Artist & Animator
            <br />
            3D Artistry Extraordinaire <br />
            <span className="read-more-btn" onClick={() => setPraveen(true)}>
              Read More &gt;
            </span>
          </p>
        </div>
      )}
      {praveen ? <BgClick onClick={() => setPraveen(false)} /> : ""}
    </MainWrapper>
  );
};
export default AnnieCard;
export { PTCard, ZainCard, MansoorCard, FarhanCard, HasnatCard };
