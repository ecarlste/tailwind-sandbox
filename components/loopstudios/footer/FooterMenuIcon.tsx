import Image from "next/image";
import React from "react";

function FooterMenuIcon(props: { link: string; iconImage: string }) {
  const { link, iconImage } = props;
  return (
    <div className="h-8 group">
      <a href={link}>
        <Image src={iconImage} alt="" className="h-6" />
      </a>
    </div>
  );
}

export default FooterMenuIcon;
