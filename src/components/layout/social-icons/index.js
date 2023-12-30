import React from "react";
import { Wrapper } from "./style";

const SocialIcons = () => {
  return (
    <Wrapper>
    
     <a
        href="https://uk.linkedin.com/company/onewayx?trk=public_profile_experience-item_profile-section-card_image-click"
        target="-blank"
      >
        <div className="linkedin"></div>
      </a>
      <a href="https://www.instagram.com/onewayxworld/" target="-blank">
        {" "}
        <div className="instagram"></div>
      </a>
      <a href="https://twitter.com/OnewayxWorld" target="-blank">
        <div className="twitter"></div>
      </a>
      <a href="https://www.tiktok.com/@onewayxworld" target="-blank">
        <div className="tiktok"></div>
      </a>
      <a href="https://chat.whatsapp.com/HYvm6zt0VcS6QDhAj7JXvX" target="-blank">
        <div className="whatsapp"></div>
      </a>
      <a href="https://t.me/onewayx" target="-blank">
        <div className="telegram"></div>
      </a>
      <a href="https://discord.gg/ZekzsAeFyR" target="-blank">
        <div className="discord"></div>
      </a>
     
    </Wrapper>
  );
};
export default SocialIcons;
