import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import FirstPage from "./components/first-page";
import JoinTheFun from "./components/explore-the-magic";
import OurStory from "./components/our-story";
import PartnerShipPage from "./components/elevate-together";
import JoinInvestment from "./components/join-investment";
import PrivacyPolicy from "./components/privacy-policy";
import ConnectWithUs from "./components/layout/all-form/contact-with-us";
import JoinOurJourney from "./components/layout/all-form/join-our-journey";
import TermsConditions from "./components/terms-and-conditions";
import EnterOurWorld from "./components/enter-our-world";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<OurStory />} />
        <Route path="/explore-the-magic" element={<JoinTheFun />} />
        
        <Route path="/elevate-together" element={<PartnerShipPage />} />
        <Route path="/join-investment" element={<JoinInvestment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/connect-with-us" element={<ConnectWithUs />} />
        <Route path="/join-our-journey" element={<JoinOurJourney />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/enter-our-world" element={<EnterOurWorld />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
