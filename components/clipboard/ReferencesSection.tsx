import React from "react";

import logoGoogle from "@/public/images/clipboard/logo-google.png";
import logoIbm from "@/public/images/clipboard/logo-ibm.png";
import logoMicrosoft from "@/public/images/clipboard/logo-microsoft.png";
import logoHp from "@/public/images/clipboard/logo-hp.png";
import logoVectorGraphics from "@/public/images/clipboard/logo-vector-graphics.png";
import Image from "next/image";

function ReferencesSection() {
  return (
    <section id="references">
      <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
        <Image src={logoGoogle} alt="" />
        <Image src={logoIbm} alt="" />
        <Image src={logoMicrosoft} alt="" />
        <Image src={logoHp} alt="" />
        <Image src={logoVectorGraphics} alt="" />
      </div>
    </section>
  );
}

export default ReferencesSection;
