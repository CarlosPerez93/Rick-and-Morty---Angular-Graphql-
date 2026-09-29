import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  skip,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';

import { Character } from '@app/shared/interfaces/data.interface';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnChanges, OnDestroy {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  @Output() selected = new EventEmitter<Character>();
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;
  readonly searchTerm$ = new BehaviorSubject<string>('');
  readonly characters$ = this.dataSvc.characters$;
  readonly loading$ = this.dataSvc.loading$;
  private destroy$ = new Subject<unknown>();

  constructor(private dataSvc: DataService) {
    this.searchTerm$
      .pipe(
        skip(1),
        debounceTime(250),
        distinctUntilChanged(),
        tap((search) => {
          if (search) {
            this.dataSvc.filterDAta(search);
          } else {
            this.dataSvc.getCharacters();
          }
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']?.currentValue) {
      setTimeout(() => this.searchInput?.nativeElement.focus());
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();
  }

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm$.next(input.value.trim());
  }

  onClear(): void {
    this.searchTerm$.next('');
    this.close();
  }

  selectCharacter(character: Character): void {
    this.selected.emit(character);
    this.close();
  }

  close(): void {
    this.closed.emit();
  }
}
