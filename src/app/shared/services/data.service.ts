import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  finalize,
  of,
  pluck,
  take,
  tap,
  withLatestFrom,
} from 'rxjs';

import {
  QUERY_CHARACTERS,
  QUERY_EPISODES,
  QUERY_BY_PAGE,
  QUERY_BY_NAME,
} from '../utils/querys.util';
import { LocalStorageService } from './localStorage.service';
import {
  Character,
  CharactersResponse,
  EpisodesResponse,
  Episode,
} from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private episodesSubject = new BehaviorSubject<Episode[]>([]);
  private charactersSubject = new BehaviorSubject<Character[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(true);

  episodes$ = this.episodesSubject.asObservable();
  characters$ = this.charactersSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  constructor(
    private apollo: Apollo,
    private localStorage: LocalStorageService,
  ) {}

  getCharactersByPage(pageNum: number): any {
    this.loadingSubject.next(true);
    this.apollo
      .watchQuery<any>({ query: QUERY_BY_PAGE(pageNum) })
      .valueChanges.pipe(
        take(1),
        pluck('data', 'characters'),
        withLatestFrom(this.characters$),
        tap(([apiRepsonse, characters]) => {
          this.parseCharacteData([...characters, ...apiRepsonse.results]);
        }),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe();
  }

  getCharacters(): void {
    this.loadingSubject.next(true);
    this.apollo
      .watchQuery<CharactersResponse>({
        query: QUERY_CHARACTERS,
      })
      .valueChanges.pipe(
        take(1),
        tap(({ data }) => {
          const { characters } = data;
          this.charactersSubject.next(characters.results);
          this.parseCharacteData(characters.results);
        }),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe();
  }

  getEpisodes(): void {
    this.loadingSubject.next(true);
    this.apollo
      .watchQuery<EpisodesResponse>({ query: QUERY_EPISODES })
      .valueChanges.pipe(
        take(1),
        tap(({ data }) => this.episodesSubject.next(data.episodes.results)),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe();
  }

  private parseCharacteData = (character: Character[]): void => {
    const currentFavs = this.localStorage.getFavoriteCharacters();
    const newData = character.map((character) => {
      const found = !!currentFavs.find(
        (fav: Character) => fav.id === character.id,
      );
      return { ...character, isFavorite: found };
    });
    this.charactersSubject.next(newData);
  };

  filterDAta(valueToSearch: string): void {
    this.loadingSubject.next(true);
    this.apollo
      .watchQuery<any>({
        query: QUERY_BY_NAME(valueToSearch),
        variables: {
          name: valueToSearch,
        },
      })
      .valueChanges.pipe(
        take(1),
        pluck('data', 'characters'),
        tap((apiResponse) => this.parseCharacteData([...apiResponse.results])),
        catchError((error) => {
          console.log(error.message);
          this.charactersSubject.next([]);
          return of(error);
        }),
        finalize(() => this.loadingSubject.next(false)),
      )
      .subscribe();
  }
}
