import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div class ="bg-slate-100 px-4 py-3 shadow-md">
      <span>My store</span>
      <app-primary-button></app-primary-button>
    </div>

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
}
// video till 16:42
// video link is https://www.youtube.com/watch?v=RNr1QZM4A38&ab_channel=ZoaibKhan
