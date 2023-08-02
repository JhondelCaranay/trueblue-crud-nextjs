import { User } from "./User";

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  userId: number;
  user: User;
};

export type Products = Product[];
