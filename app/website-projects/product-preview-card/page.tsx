import ProductPreviewCard from "./_components/product-preview-card";
import { Product } from "./product";

const product: Product = {
  category: "Perfume",
  name: "Gabrielle Essence Eau De Parfum",
  description:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  price: {
    original: 169.99,
    current: 149.99,
  },
};

export default function ProductPreviewCardSitePage() {
  return (
    <div className="flex items-center justify-center bg-cream min-h-lvh pt-20 pb-[172px] px-3 pt">
      <ProductPreviewCard product={product} />
    </div>
  );
}
