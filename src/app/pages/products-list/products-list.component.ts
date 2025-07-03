import { Component, signal } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  stock: number;
}

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
   <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id) {
    <app-product-card></app-product-card>
    }
   </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      image: 'https://via.placeholder.com/150',
      stock: 10
    }
  ]);
}
