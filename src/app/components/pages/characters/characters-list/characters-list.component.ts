import { Component, HostListener, Inject } from '@angular/core';
import { DataService } from '@shared/services/data.service';
import { LocalStorageService } from '../../../../shared/services/localStorage.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-characters-list',
  template: `
    <section class="charater__list" infinite-scroll (scrolled)="onScrollDown()">
      <app-characters-card
        *ngFor="let character of characters$ | async"
        [character]="character"
      >
      </app-characters-card>
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
