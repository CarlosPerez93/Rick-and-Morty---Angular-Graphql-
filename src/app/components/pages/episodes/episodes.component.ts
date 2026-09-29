import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

import { DataService } from '@app/shared/services/data.service';
import { Episode } from '@app/shared/interfaces/data.interface';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
})
export class EpisodesComponent implements OnInit {
  readonly searchTerm$ = new BehaviorSubject<string>('');
  readonly selectedSeason$ = new BehaviorSubject<string>('All');
  readonly seasonFilters$ = this.dataService.episodes$.pipe(
    map((episodes) => [
      'All',
      ...Array.from(
        new Set(episodes.map((episode) => this.getSeason(episode.episode))),
      ).sort(),
    ]),
  );
  readonly seasons$ = combineLatest([
    this.dataService.episodes$,
    this.searchTerm$,
    this.selectedSeason$,
  ]).pipe(
    map(([episodes, searchTerm, selectedSeason]) => {
      const normalizedTerm = searchTerm.trim().toLowerCase();
      const filteredEpisodes = episodes.filter((episode) => {
        const matchesSearch =
          !normalizedTerm ||
          episode.name.toLowerCase().includes(normalizedTerm) ||
          episode.episode.toLowerCase().includes(normalizedTerm);
        const matchesSeason =
          selectedSeason === 'All' ||
          this.getSeason(episode.episode) === selectedSeason;

        return matchesSearch && matchesSeason;
      });

      const episodesBySeason = new Map<string, Episode[]>();
      filteredEpisodes.forEach((episode) => {
        const season = this.getSeason(episode.episode);
        const seasonEpisodes = episodesBySeason.get(season) ?? [];
        seasonEpisodes.push(episode);
        episodesBySeason.set(season, seasonEpisodes);
      });

      return Array.from(episodesBySeason.entries()).map(
        ([season, seasonEpisodes]) => ({
          season,
          episodes: seasonEpisodes,
        }),
      );
    }),
  );

  readonly episodeCount$ = this.dataService.episodes$.pipe(
    map((episodes) => episodes.length),
  );

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getEpisodes();
  }

  onSearchInput(event: Event): void {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.searchTerm$.next(target.value);
    }
  }

  setSeasonFilter(season: string): void {
    this.selectedSeason$.next(season);
  }

  getSeason(episodeCode: string): string {
    return episodeCode.match(/^S\d+/i)?.[0].toUpperCase() ?? 'Specials';
  }
}
