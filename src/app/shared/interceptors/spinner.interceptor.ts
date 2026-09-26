import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { SpinnerService } from '../services/spiner.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerSvc: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    this.spinnerSvc.showSpinner();
    return next.handle(req).pipe(finalize(() => this.spinnerSvc.hideSpinner()));
  }
}
