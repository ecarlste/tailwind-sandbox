import React from "react";

import FooterSocialCopyContainer from "./FooterSocialCopyContainer";
import FooterMenuItemsContainer from "./FooterMenuItemsContainer";
import Image from "next/image";

import logoSvg from "@/public/images/loopstudios/logo.svg";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        {/* <!-- Footer Flex Container --> */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* <!-- Menu & Logo --> */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* <!-- Logo  --> */}
            <div className="h-8">
              <Image src={logoSvg} alt="" className="w-44 md:ml-3" />
            </div>
            <FooterMenuItemsContainer />
          </div>

          <FooterSocialCopyContainer />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
