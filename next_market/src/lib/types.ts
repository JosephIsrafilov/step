export type Product = {
  id: number;
  name: string;
  category: "fruits" | "vegetables";
  price: number;
};

export type Filters = {
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  name?: string;
  sortBy?: string;
  order?: string;
};
