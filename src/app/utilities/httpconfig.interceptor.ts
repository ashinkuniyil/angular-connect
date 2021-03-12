import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { DataStore } from '../utilities/data-store';
import { ErrorDialogService } from '../shared/services/errordialog.service';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  dataStore: DataStore;
  constructor(public errorDialogService: ErrorDialogService) {
    this.dataStore = DataStore.getInstance();
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token: string | null = this.dataStore.getData('token');

    // if (token) {
    //   request = request.clone({
    //     headers: request.headers.set('Authorization', 'Bearer ' + token),
    //   });
    // }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason:
            error && error.error && error.error.error ? error.error.error : '',
          status: error.status,
        };
        this.errorDialogService.openDialog(data);
        return throwError(error);
      })
    );
  }
}
