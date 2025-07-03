import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { ProductsListComponent } from '../../pages/products-list/products-list.component';
@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent,ProductsListComponent],
  template: `
    <div class ="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text-xl">My store</span>
      <app-primary-button label= "Cart" (btnClicked)=showbuttonclicked()></app-primary-button>
    </div>
     <app-products-list></app-products-list>

  `,
  styles: `
  .header{
    background-color: grey;
    color: black;
    padding: 1 rem;

  }`
})
export class HeaderComponent {
  title =signal('My Ecom App');
  showbuttonclicked() {
    console.log('Button clicked!');
  }
}
// video till 29:12
// video link is https://www.youtube.com/watch?v=RNr1QZM4A38&ab_channel=ZoaibKhan
