import { Products } from "./Product";

export type User = {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  products: Products;
};

export type Users = User[];
