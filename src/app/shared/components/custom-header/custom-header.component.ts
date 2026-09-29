import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css'],
})
export class CustomHeaderComponent {
  @Input() episodesCount: number;
  @Input() episodesindexed: string;
  @Input() showepisodes: boolean = false;

  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() classCustom: string;

  @Input() showButton: boolean = false;
  @Output() searchRequested = new EventEmitter<void>();
}
