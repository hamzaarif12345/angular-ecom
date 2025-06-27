import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class ="header">{{title()}}</div>

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
