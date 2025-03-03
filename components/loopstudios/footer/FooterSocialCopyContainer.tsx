import React from "react";
import FooterMenuIcon from "./FooterMenuIcon";

import iconFacebook from "@/public/images/loopstudios/icon-facebook.svg";
import iconTwitter from "@/public/images/loopstudios/icon-twitter.svg";
import iconPinterest from "@/public/images/loopstudios/icon-pinterest.svg";
import iconInstagram from "@/public/images/loopstudios/icon-instagram.svg";

function FooterSocialCopyContainer() {
  return (
    <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
      {/* <!-- Icons Container --> */}
      <div className="flex flex-row items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
        <FooterMenuIcon link="#" iconImage={iconFacebook} />
        <FooterMenuIcon link="#" iconImage={iconTwitter} />
        <FooterMenuIcon link="#" iconImage={iconPinterest} />
        <FooterMenuIcon link="#" iconImage={iconInstagram} />
      </div>

      {/* <!-- Copy --> */}
      <div className="font-bold">
        &copy; 2023 Loopstudios. All rights reserved.
      </div>
    </div>
  );
}

export default FooterSocialCopyContainer;
