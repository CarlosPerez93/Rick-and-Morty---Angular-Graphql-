import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from '@app/shared/interfaces/data.interface';
import { LocalStorageService } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly charactersFav$ = this.localStorageSvc.charactersFav$;
  selectedCharacter: Character | null = null;

  constructor(
    private localStorageSvc: LocalStorageService,
    private router: Router,
  ) {}

  @HostListener('window:keydown', ['$event'])
  onWindowKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  close(): void {
    void this.router.navigate(['/characters-list']);
  }

  openDetails(character: Character): void {
    this.selectedCharacter = character;
  }

  closeDetails(): void {
    this.selectedCharacter = null;
  }
}
