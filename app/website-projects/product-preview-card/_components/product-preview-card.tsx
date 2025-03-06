import Image from "next/image";
import { Product } from "../product";

type ProductPreviewCardProps = {
  product: Product;
};

export default function ProductPreviewCard({
  product,
}: ProductPreviewCardProps) {
  return (
    <div className="flex flex-col max-w-[350px] bg-white rounded-lg w-full sm:flex-row sm:max-w-[600px]">
      <div
        className={`
          w-full h-[342px] bg-[url(/images/product-preview-card/image-product-desktop.jpg)] bg-no-repeat
          bg-[length:108%_166.776%] bg-[-27.18px_-52.686px] rounded-t-lg rounded-b-none sm:w-[300px] sm:h-auto
          sm:bg-[0px_0px] sm:bg-[length:100%_100%] sm:rounded-l-lg sm:rounded-r-none
        `}
      />
      <div className="flex flex-col p-8 gap-6 sm:gap-8 w-full sm:w-[300px]">
        <div className="flex flex-col gap-6">
          <div className="font-montserrat text-xs font-medium uppercase text-grey leading-[120%] tracking-[5px]">
            {product.category}
          </div>
          <h1 className="font-fraunces text-[32px] font-bold text-black leading-[100%]">
            {product.name}
          </h1>
          <p className="font-montserrat text-sm font-medium text-grey leading-[160%]">
            {product.description}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-fraunces text-[32px] font-bold text-green-500 leading-[100%]">
            ${product.price.current}
          </span>
          <span className="font-montserrat text-[13px] font-medium leading-[120%] line-through">
            ${product.price.original}
          </span>
        </div>
        <button
          className={`
            flex bg-green-500 w-full gap-2 px-8 py-4 rounded-lg items-center justify-center hover:bg-green-700
            hover:cursor-pointer
          `}
        >
          <Image
            src={"/images/product-preview-card/icon-cart.svg"}
            alt={"Cart icon"}
            width={18}
            height={18}
          />
          <div className="font-montserrat text-white text-sm font-bold leading-[110%]">
            Add to cart
          </div>
        </button>
      </div>
    </div>
  );
}
