"use client";

import { useState } from "react";
import IconShare from "./icon-share";
import ShareToastBackground from "./share-toast-background";
import ShareToastLinks from "./share-toast-links";

function ShareButtonWithToast() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div className="relative">
      {isToastVisible && (
        <>
          {/* Tablet and Desktop */}
          <ShareToastBackground className="absolute bottom-[30px] left-[-118px] hidden md:block" />
          <ShareToastLinks className="absolute md:flex gap-6 bottom-[80px] left-[-73px] hidden" />

          {/* Mobile */}
          <ShareToastBackground
            className="absolute md:hidden top-[-22px] right-[-30px]"
            variant="mobile"
            setIsToastVisible={setIsToastVisible}
          />
        </>
      )}
      <IconShare setIsToastVisible={setIsToastVisible} />
    </div>
  );
}

export default ShareButtonWithToast;
