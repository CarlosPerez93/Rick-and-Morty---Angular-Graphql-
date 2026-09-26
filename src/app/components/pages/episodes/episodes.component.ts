import { Component, OnInit } from '@angular/core';

import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-episodes',
  template: `
    <section class="container">
      <ul class="episodes__list">
        <li *ngFor="let episode of episodes$ | async">
          {{ episode.episode }} - {{ episode.name }}
        </li>
      </ul>
    </section>
  `,
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  episodes$ = this.dataService.episodes$;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    console.log('EpisodesComponent initialized');
  }
}
