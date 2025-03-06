export type Price = {
  original: number;
  current: number;
};

export type Product = {
  category: string;
  name: string;
  description: string;
  price: Price;
};
