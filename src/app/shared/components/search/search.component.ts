import { FormControl } from '@angular/forms';
import { Component, OnDestroy } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-search',
  template: `
    <section class="search__container">
      <div class="search__name">
        <label for="searchName">Search by name</label>
        <input
          type="text"
          class="search__input"
          placeholder="search by name..."
          [formControl]="search"
        />
        <button (click)="onClear()">Clear</button>
      </div>
    </section>
  `,
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnDestroy {
  search = new FormControl('');
  private destroy$ = new Subject<unknown>();

  constructor(private dataSvc: DataService) {
    this.onSearch();
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  private onSearch(): void {
    this.search.valueChanges
      .pipe(
        map((search) => search?.toLowerCase().trim(), debounceTime(300)),
        distinctUntilChanged(),
        filter((search) => search !== '' && search?.length! > 2),
        tap((search) => this.dataSvc.filterDAta(search!)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  onClear(): void {
    this.search.reset();
    this.dataSvc.getDataApi();
  }
}
