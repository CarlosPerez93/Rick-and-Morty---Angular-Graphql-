import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Character } from '../interfaces/data.interface';

const MY_FAVORITES: string = 'myFavorites';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private charactrersFavSubject = new BehaviorSubject<Character[]>([]);
  charactersFav$ = this.charactrersFavSubject.asObservable();

  constructor(private toastrSvc: ToastrService) {
    this.initialStorage();
  }

  addOrRemoveFavorite(characer: Character): void {
    const { id } = characer;
    const currentsFav: any = this.getFavoriteCharacters();
    const found = !!currentsFav.find((fav: Character) => fav.id === id);
    found ? this.removeFromfavorite(id) : this.addToFavorite(characer);
  }

  private addToFavorite(character: Character): void {
    try {
      const currentFav = this.getFavoriteCharacters();
      localStorage.setItem(
        MY_FAVORITES,
        JSON.stringify([...currentFav, character]),
      );
      this.charactrersFavSubject.next([...currentFav, character]);
      this.toastrSvc.success(
        `${character.name} added to favorite`,
        'RickAndMortyApp',
      );
    } catch (error) {
      this.toastrSvc.error(
        `Error saving localStora ${error} `,
        'RickAndMortyApp',
      );
    }
  }
  private removeFromfavorite(id: number): void {
    try {
      const currentFav = this.getFavoriteCharacters();
      const characters = currentFav.filter((item) => item.id !== id);
      localStorage.setItem(MY_FAVORITES, JSON.stringify([...characters]));
      this.charactrersFavSubject.next([...characters]);
      this.toastrSvc.warning(` Removed to favorite`, 'RickAndMortyApp');
    } catch (error) {
      this.toastrSvc.error(
        `Error removing localStora ${error} `,
        'RickAndMortyApp',
      );
    }
  }

  getFavoriteCharacters(): Character[] {
    try {
      const charactersFav: Character[] = JSON.parse(
        localStorage.getItem(MY_FAVORITES)!,
      );
      this.charactrersFavSubject.next(charactersFav);
      return charactersFav;
    } catch (error) {
      console.log('Error getting favorites from local storage', error);
      return [];
    }
  }

  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.log('Error cleanning the local storage', error);
    }
  }

  private initialStorage(): void {
    const currents = JSON.parse(localStorage.getItem(MY_FAVORITES)!);
    if (!currents) {
      localStorage.setItem(MY_FAVORITES, JSON.stringify([]));
    }

    this.getFavoriteCharacters();
  }
}
