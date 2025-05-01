"use client";

import { useState } from "react";
import IconShare from "./icon-share";
import ShareToastMobile from "./share-toast-mobile";
import ShareToastDesktopTablet from "./share-toast-desktop-tablet";

function ShareButtonWithToast() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div className="relative">
      {isToastVisible && (
        <>
          <ShareToastDesktopTablet className="absolute bottom-[50px] left-[-108px] hidden md:flex" />
          <ShareToastMobile
            className="absolute md:hidden top-[-22px] right-[-30px]"
            setIsToastVisible={setIsToastVisible}
          />
        </>
      )}
      <IconShare setIsToastVisible={setIsToastVisible} />
    </div>
  );
}

export default ShareButtonWithToast;
