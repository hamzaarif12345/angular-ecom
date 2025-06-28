import { Component } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,  // ✅ This makes it a standalone component
  imports: [],
  template: `
    <p>
      primary-button works!
    </p>
  `,
  styles: ``
})
export class PrimaryButtonComponent {

}
