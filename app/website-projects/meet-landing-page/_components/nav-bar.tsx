import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="pt-12">
      <Image
        src="/images/meet-landing-page/logo.svg"
        alt="Meet Logo"
        width={119}
        height={28}
      />
    </nav>
  );
}
