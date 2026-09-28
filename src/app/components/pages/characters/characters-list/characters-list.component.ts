import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

import { DataService } from '@shared/services/data.service';
import { LocalStorageService } from '@shared/services/localStorage.service';

@Component({
  selector: 'app-characters-list',
  template: `
    <app-search />
    <section class="charater__list" infinite-scroll (scrolled)="onScrollDown()">
      <ng-container *ngIf="characters$ | async as characters">
        <ng-container *ngIf="characters.length > 0; else showEmpty">
          <app-characters-card
            *ngFor="let character of characters"
            [character]="character"
          ></app-characters-card>
        </ng-container>
      </ng-container>
      <ng-template #showEmpty>
        <div class="notResults">
          <h1 class="title">Not Results</h1>
          <img src="assets/imgs/404.jpeg" alt="404" />
        </div>
      </ng-template>
      <button class="button" *ngIf="showButton" (click)="onScrollTop()">
        ⬆️
      </button>
    </section>
  `,
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {
  characters$ = this.DataService.characters$;
  showButton = false;
  pageNum = 1;
  private scrollHeight = 500;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private DataService: DataService,
    private localStorageSVC: LocalStorageService,
  ) {}

  @HostListener('window:scroll')
  onWindowsScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown(): void {
    this.pageNum++;
    this.DataService.getCharactersByPage(this.pageNum);
  }
}
