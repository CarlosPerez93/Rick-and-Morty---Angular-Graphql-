import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

import { Character } from '@app/shared/interfaces/data.interface';
import { DataService } from '@shared/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})
export class CharactersListComponent {
  readonly loading$ = this.dataService.loading$;
  readonly filterStatus$ = new BehaviorSubject<string>('All');
  readonly filteredCharacters$ = combineLatest([
    this.dataService.characters$,
    this.filterStatus$,
  ]).pipe(
    map(([characters, status]) =>
      status === 'All'
        ? characters
        : characters.filter(
            (character) =>
              character.status.toLowerCase() === status.toLowerCase(),
          ),
    ),
  );
  readonly skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  isSearchOpen = false;
  selectedCharacter: Character | null = null;
  showButton = false;
  pageNum = 1;
  private scrollHeight = 500;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dataService: DataService,
  ) {}

  @HostListener('window:keydown', ['$event'])
  onWindowKeydown(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.isSearchOpen = true;
    }

    if (event.key === 'Escape') {
      this.isSearchOpen = false;
      this.selectedCharacter = null;
    }
  }

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
    this.dataService.getCharactersByPage(this.pageNum);
  }

  setStatusFilter(status: string): void {
    this.filterStatus$.next(status);
  }

  openDetails(character: Character): void {
    this.selectedCharacter = character;
  }

  closeDetails(): void {
    this.selectedCharacter = null;
  }
}
