import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <section class="page__notFound">
      <h1>404</h1>
      <p>Oh no!! You are lost.</p>
    </section>
  `,
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent {}
