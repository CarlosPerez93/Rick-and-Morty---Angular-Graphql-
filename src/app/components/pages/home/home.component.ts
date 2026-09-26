import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-home',
  template: `
    <section class="character__list">
      <app-characters-card
        *ngFor="let character of charactersFav$ | async"
        [character]="character"
      ></app-characters-card>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  charactersFav$ = this.localStorageSvc.charactersFav$;

  constructor(private localStorageSvc: LocalStorageService) {}

  ngOnInit(): void {}
}
