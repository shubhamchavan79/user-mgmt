import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loaderService.show();
    
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => { 
      if (event instanceof HttpResponse) {
        this.loaderService.hide();
      }
    },
      (err: any) => {
        this.loaderService.hide();
    }));
  }
}
