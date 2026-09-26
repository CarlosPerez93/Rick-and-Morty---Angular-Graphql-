import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoading$ = new Subject<boolean>();

  showSpinner(): void {
    this.isLoading$.next(true);
  }

  hideSpinner(): void {
    this.isLoading$.next(false);
  }
}
