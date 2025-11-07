export type Variant = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
  variants?: Variant[]; // NOT string[]
};
