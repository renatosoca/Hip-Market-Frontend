import { IProduct } from './product.interface';

export interface IProductBySlug {
  product: IProduct;
}

export interface IProductResponse extends IProduct {
  createdAt: string;
  updatedAt: string;
}

export interface IProducts {
  ok: boolean;
  products: IProduct[];
}

/* export interface Product {
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  title: string;
} */

export interface IProductSlugs {
  ok: boolean;
  slugs: ISlug[];
}

export interface ISlug {
  slug: string;
}
