import React from 'react';
import FooterMenuIcon from './FooterMenuIcon';

function FooterSocialCopyContainer() {
  return (
    <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
      {/* <!-- Icons Container --> */}
      <div className="flex flex-row items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
        <FooterMenuIcon
          link="#"
          iconImage="/images/loopstudios/icon-facebook.svg"
        />
        <FooterMenuIcon
          link="#"
          iconImage="/images/loopstudios/icon-twitter.svg"
        />
        <FooterMenuIcon
          link="#"
          iconImage="/images/loopstudios/icon-pinterest.svg"
        />
        <FooterMenuIcon
          link="#"
          iconImage="/images/loopstudios/icon-instagram.svg"
        />
      </div>

      {/* <!-- Copy --> */}
      <div className="font-bold">
        &copy; 2023 Loopstudios. All rights reserved.
      </div>
    </div>
  );
}

export default FooterSocialCopyContainer;
