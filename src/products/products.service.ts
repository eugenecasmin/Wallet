import { Injectable } from '@nestjs/common';

import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, description, price); // create new product
    this.products.push(newProduct); // add new product to the array of products
    return prodId;
  }

  getProducts() {
    return [...this.products]; // preventing pointer referencing
  }
}
