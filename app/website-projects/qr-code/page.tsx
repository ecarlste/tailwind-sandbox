import qrCodeImage from "@/public/images/qr-code/image-qr-code.png";
import QrCodeCard from "./_components/qr-code-card";

export const generateMetadata = () => {
  return {
    title: "QR Code Component",
    description:
      "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
    icons: {
      icon: "/images/qr-code/favicon-32x32.png",
    },
  };
};

export default function QrCodeSitePage() {
  const heading = "Improve your front-end skills by building projects";
  const description =
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level";

  return (
    <main className="bg-slate-300 min-h-screen flex items-center justify-center">
      <QrCodeCard
        qrCodeImage={qrCodeImage}
        heading={heading}
        description={description}
      />
    </main>
  );
}
