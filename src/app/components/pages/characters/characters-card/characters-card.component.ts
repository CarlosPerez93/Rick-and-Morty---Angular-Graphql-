import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Character } from '@app/shared/interfaces/data.interface';
import { LocalStorageService } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersCardComponent {
  @Input() character: Character;
  @Output() viewDetails = new EventEmitter<Character>();

  constructor(private localStorage: LocalStorageService) {}
  getIcon(): string {
    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }

  toggleFavorite(): void {
    const isFavorite = this.character.isFavorite;
    this.getIcon();
    this.character.isFavorite = !isFavorite;
    this.localStorage.addOrRemoveFavorite(this.character);
  }
}
