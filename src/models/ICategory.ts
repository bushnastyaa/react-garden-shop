import React from "react";
import { IProduct } from "./IProduct";

export interface ICategory {
  id: number;
  image: string;
  title: string;
}

export type ICategoryUrlParam = {
  id: string
}

export interface ICategoryProducts {
  category: ICategory,
  data: IProduct[]
}