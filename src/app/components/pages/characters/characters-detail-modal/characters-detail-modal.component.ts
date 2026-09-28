import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '@app/shared/interfaces/data.interface';

@Component({
  selector: 'app-character-detail-modal',
  templateUrl: './characters-detail-modal.component.html',
  styleUrls: ['./characters-detail-modal.component.css'],
})
export class CharactersDetailModalComponent {
  @Input() character!: Character;
  @Output() close = new EventEmitter<void>();
}
