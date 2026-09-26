import { Component, OnInit } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { LocalStorageService } from '../../../../shared/services/localStorage.service';

@Component({
  selector: 'app-characters-list',
  template: `
    <section class="charater__list">
      <app-characters-card
        *ngFor="let character of characters$ | async"
        [character]="character"
      >
      </app-characters-card>
    </section>
  `,
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {
  characters$ = this.DataService.characters$;

  constructor(
    private DataService: DataService,
    private localStorageSVC: LocalStorageService,
  ) {}
}
