import Image, { StaticImageData } from "next/image";

type CollageImageProps = {
  src: StaticImageData;
  alt: string;
};

export default function CollageImage({ src, alt }: CollageImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className="flex-1 rounded-lg h-[144px] w-auto md:h-40 md:w-[152px] xl:h-64 xl:w-64"
      placeholder="blur"
    />
  );
}
