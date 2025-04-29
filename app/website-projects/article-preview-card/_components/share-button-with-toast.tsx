"use client";

import { useState } from "react";
import IconFacebook from "./icon-facebook";
import IconPinterest from "./icon-pinterest";
import IconShare from "./icon-share";
import IconTwitter from "./icon-twitter";
import ShareToast from "./share-toast";

function ShareButtonWithToast() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  return (
    <div className="relative">
      {isToastVisible && (
        <>
          <ShareToast className="absolute bottom-[30px] left-[-118px]" />
          <div className="absolute flex gap-6 bottom-[80px] left-[-73px]">
            <span className="text-preset-3 text-grey-400">Share</span>
            <div className="flex gap-4">
              <IconFacebook />
              <IconTwitter />
              <IconPinterest />
            </div>
          </div>
        </>
      )}
      <IconShare setIsToastVisible={setIsToastVisible} />
    </div>
  );
}

export default ShareButtonWithToast;
